from flask import Flask, render_template, request, redirect, jsonify, url_for, flash, make_response
from sqlalchemy import create_engine, asc
from sqlalchemy.orm import sessionmaker
from portfolio_site.models import Base, User, Category, Item
from flask import session as login_session
import random
import string
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
import httplib2
import json
import requests


app = Flask(__name__)


CLIENT_ID = json.loads(
    open('/var/www/portfolio_site/portfolio_site/client_secrets.json', 'r').read())['web']['client_id']
APPLICATION_NAME = 'catalogdb'


engine = create_engine('postgresql://catalog:Catalog21!@localhost/catalogdb')
Base.metadata.bind = engine


DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route('/')
def showMain():
    return render_template('index.html')

@app.route('/my_story')
def showMyStory():
    return render_template('my_story.html')

@app.route('/skill_set')
def showSkillSet():
    return render_template('skill_set.html')

@app.route('/featured_work')
def showFeaturedWork():
    return render_template('featured_work.html')

@app.route('/connect')
def showConnect():
    return render_template('connect.html')

@app.route('/interactive_map')
def showInteractiveMap():
    return render_template('interactive_map.html')

@app.route('/login')
def showLogin():
    state = ''.join(random.choice(string.ascii_uppercase + string.digits)
                    for x in range(32))
    login_session['state'] = state
    return render_template('login.html', STATE=state)


@app.route('/gconnect', methods=['POST'])
def gconnect():
    # Validate state token
    if request.args.get('state') != login_session['state']:
        response = make_response(json.dumps('Invalid state parameter.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    # Obtain authorization code
    code = request.data

    try:
        # Upgrade the authorization code into a credentials object
        oauth_flow = flow_from_clientsecrets('client_secrets.json', scope='')
        oauth_flow.redirect_uri = 'postmessage'
        credentials = oauth_flow.step2_exchange(code)
    except FlowExchangeError:
        response = make_response(
            json.dumps('Failed to upgrade the authorization code.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Check that the access token is valid.
    access_token = credentials.access_token
    url = ('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=%s'
           % access_token)
    h = httplib2.Http()
    result = json.loads(h.request(url, 'GET')[1])
    # If there was an error in the access token info, abort.
    if result.get('error') is not None:
        response = make_response(json.dumps(result.get('error')), 500)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is used for the intended user.
    gplus_id = credentials.id_token['sub']
    if result['user_id'] != gplus_id:
        response = make_response(
            json.dumps("Token's user ID doesn't match given user ID."), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is valid for this app.
    if result['issued_to'] != CLIENT_ID:
        response = make_response(
            json.dumps("Token's client ID does not match app's."), 401)
        print("Token's client ID does not match app's.")
        response.headers['Content-Type'] = 'application/json'
        return response

    stored_access_token = login_session.get('access_token')
    stored_gplus_id = login_session.get('gplus_id')
    if stored_access_token is not None and gplus_id == stored_gplus_id:
        response = make_response(json.dumps
                                 ('Current user is already connected.'), 200)

        response.headers['Content-Type'] = 'application/json'
        return response

    # Store the access token in the session for later use.
    login_session['access_token'] = credentials.access_token
    login_session['gplus_id'] = gplus_id

    # Get user info
    userinfo_url = "https://www.googleapis.com/oauth2/v1/userinfo"
    params = {'access_token': credentials.access_token, 'alt': 'json'}
    answer = requests.get(userinfo_url, params=params)

    data = answer.json()

    login_session['username'] = data['name']
    login_session['picture'] = data['picture']
    login_session['email'] = data['email']
    # ADD PROVIDER TO LOGIN SESSION
    login_session['provider'] = 'google'

    # see if user exists, if it doesn't make a new one
    user_id = getUserID(data["email"])
    if not user_id:
        user_id = createUser(login_session)
    login_session['user_id'] = user_id
    output = ''
    output += '<h1>Welcome, '
    output += login_session['username']
    output += '!</h1>'
    output += '<img src="'
    output += login_session['picture']
    output += ' " style = "width: 300px; height: 300px;border-radius: 150px;">'
    flash("You are now logged in as %s" % login_session['username'])
    print("done!")
    return output


# User Helper Functions
def createUser(login_session):
    newUser = User(name=login_session['username'], email=login_session[
                   'email'], picture=login_session['picture'])
    session.add(newUser)
    session.commit()
    user = session.query(User).filter_by(email=login_session['email']).one()
    return user.id


def getUserInfo(user_id):
    user = session.query(User).filter_by(id=user_id).one()
    return user


def getUserID(email):
    try:
        user = session.query(User).filter_by(email=email).one()
        return user.id
    except:
        return None


# DISCONNECT - Revoke a current user's token and reset their login_session
@app.route('/gdisconnect')
def gdisconnect():
    # Only disconnect a connected user.
    access_token = login_session.get('access_token')
    if access_token is None:
        response = make_response(
            json.dumps('Current user not connected.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    url = 'https://accounts.google.com/o/oauth2/revoke?token=%s' % access_token
    h = httplib2.Http()
    result = h.request(url, 'GET')[0]
    if result['status'] == '200':
        response = make_response(json.dumps('Successfully disconnected.'), 200)
        response.headers['Content-Type'] = 'application/json'
        return response
    else:
        response = make_response(json.dumps('Failed to revoke token for user.',
                                            400))
        response.headers['Content-Type'] = 'application/json'
        return response


# Disconnect based on provider
@app.route('/disconnect')
def disconnect():
    if 'provider' in login_session:
        if login_session['provider'] == 'google':
            gdisconnect()
        del login_session['gplus_id']
        del login_session['access_token']
        del login_session['username']
        del login_session['email']
        del login_session['picture']
        del login_session['user_id']
        del login_session['provider']
        flash("You have been successfully logged out.")
        return redirect(url_for('showLogin'))
    else:
        flash("You were not logged in")
        return redirect(url_for('showLogin'))


# JSON Endpoints
@app.route('/catalog/JSON')
@app.route('/catalog/categories/JSON/')
def showCategoriesJSON():
    categories = session.query(Category).all()
    return jsonify(Category_List=[category.serialize for category in categories])


@app.route('/catalog/categories/<int:category_id>/products/JSON/')
@app.route('/catalog/categories/<int:category_id>/JSON/')
def showProductsJSON(category_id):
    category = session.query(Category).filter_by(id=category_id).one()
    products = session.query(Item).filter_by(category_id=category_id).all()
    return jsonify(Products=[product.serialize for product in products])


@app.route('/catalog/categories/<int:category_id>/products/<int:item_id>/JSON/')
@app.route('/catalog/categories/<int:category_id>/products/<int:item_id>/detail/JSON/')
def detailProductJSON(category_id, item_id):
    category = session.query(Category).filter_by(id=category_id).one()
    product = session.query(Item).filter_by(id=item_id).one()
    return jsonify(Product_Details=[product.serialize])

@app.route('/catalog/')
@app.route('/catalog/categories/')
def showCategories():
    categories = session.query(Category).all()
    recent_products = session.query(Item).order_by(Item.id.desc()).limit(12).all()
    if 'username' not in login_session:
        return render_template('public_main.html', categories=categories,
                               recent_products=recent_products)
    else:
        return render_template('main.html', categories=categories,
                               recent_products=recent_products)


@app.route('/catalog/categories/new/', methods=['GET', 'POST'])
def newCategory():
    if 'username' not in login_session:
        return redirect('/login')
    if request.method == 'POST':
        newCat = Category(name=request.form['name'],
                          user_id=login_session['user_id'])
        session.add(newCat)
        session.commit()
        flash("%s has been successfully created!" % newCat.name)
        return redirect(url_for('showCategories'))
    else:
        return render_template('new_category.html')


@app.route('/catalog/categories/<int:category_id>/delete/', methods=['GET', 'POST'])
def deleteCategory(category_id):
    if 'username' not in login_session:
        return redirect('login')
    deletedCategory = session.query(Category).filter_by(id=category_id).one()
    if request.method == 'POST':
        flash("%s has been successfully deleted!" % deletedCategory.name)
        session.delete(deletedCategory)
        session.commit()
        return redirect(url_for('showCategories'))
    else:
        return render_template('delete_category.html', category_id=category_id,
                               category=deletedCategory)


@app.route('/catalog/categoreies/<int:category_id>/products/')
@app.route('/catalog/categories/<int:category_id>/')
def showProducts(category_id):
    category = session.query(Category).filter_by(id=category_id).one()
    products = session.query(Item).filter_by(category_id=category_id).all()
    if 'username' not in login_session:
        return render_template('public_products.html', products=products,
                               category=category)
    else:
        return render_template('products.html', products=products,
                               category=category)


@app.route('/catalog/categories/<int:category_id>/products/new/',
           methods=['GET', 'POST'])
def newProduct(category_id):
    if 'username' not in login_session:
        return redirect('/login')
    category = session.query(Category).filter_by(id=category_id).one()
    if login_session['user_id'] != category.user.id:
        return flash("""You aren't authorized to edit these products.
        Please log in""")
    if request.method == 'POST':
        if request.form['image']:
            newItem = Item(
                name=request.form['name'],
                description=request.form['description'],
                price=request.form['price'],
                image=request.form['image'],
                category_id=category_id)
        else:
            newItem = Item(
                name=request.form['name'],
                description=request.form['description'],
                price=request.form['price'],
                image='https://goo.gl/Hj8MqW',
                category_id=category_id)
        session.add(newItem)
        session.commit()
        flash("%s has been successfully created!" % newItem.name)
        return redirect(url_for('showProducts', category_id=category_id))
    else:
        return render_template('new_product.html', category_id=category_id,
                               category=category)


@app.route('/catalog/categories/<int:category_id>/products/<int:item_id>/edit/',
           methods=['GET', 'POST'])
def editProduct(category_id, item_id):
    if 'username' not in login_session:
        return redirect('/login')
    editedProduct = session.query(Item).filter_by(id=item_id).one()
    if request.method == 'POST':
        if request.form['name']:
            editedProduct.name = request.form['name']
        if request.form['description']:
            editedProduct.description = request.form['description']
        if request.form['price']:
            editedProduct.price = request.form['price']
        if request.form['image']:
            editedProduct.image = request.form['image']
        session.add(editedProduct)
        session.commit()
        flash("%s has been successfully updated!" % editedProduct.name)
        return redirect(url_for('detailProduct', category_id=category_id,
                        item_id=item_id))
    else:
        return render_template('edit_product.html', category_id=category_id,
                               item_id=item_id, product=editedProduct)


@app.route('/catalog/categories/<int:category_id>/products/<int:item_id>/delete/',
           methods=['GET', 'POST'])
def deleteProduct(category_id, item_id):
    if 'username' not in login_session:
        return redirect('/login')
    deletedProduct = session.query(Item).filter_by(id=item_id).one()
    if request.method == 'POST':
        flash("%s has been successfully deleted!" % deletedProduct.name)
        session.delete(deletedProduct)
        session.commit()
        return redirect(url_for('showProducts', category_id=category_id))
    else:
        return render_template('delete_product.html', category_id=category_id,
                               product=deletedProduct)


@app.route('/catalog/categories/<int:category_id>/products/<int:item_id>/detail/',
           methods=['GET', 'POST'])
def detailProduct(category_id, item_id):
    product = session.query(Item).filter_by(id=item_id).one()
    if 'username' not in login_session:
        return render_template('public_product_detail.html',
                               category_id=category_id, item_id=item_id,
                               product=product)
    else:
        return render_template('product_detail.html', category_id=category_id,
                               item_id=item_id, product=product)



if __name__ == '__main__':
    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=8000)
