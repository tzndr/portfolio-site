from flask import Flask, render_template, redirect, url_for, request, flash
from sqlalchemy import create_engine, asc
from sqlalchemy.orm import sessionmaker
from models import Base, User, BlogPost
from flask import session as login_session
import random, string
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
import httplib2
import requests
import json
from flask import make_response
import logging

app = Flask(__name__)

engine = create_engine('sqlite:///tzdb.db?check_same_thread=False')
Base.metadata.bind = create_engine
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

@app.route('/blog')
def showBlog():
    posts = session.query(BlogPost).all()
    return render_template('blog.html', posts=posts)

@app.route('/blog/<int:blogPost_id>/read', methods=['GET', 'POST'])
def readBlogPost(blogPost_id):
    selected_post = session.query(BlogPost).filter_by(id = blogPost_id).one()
    return render_template('read_blog_post.html', selected_post = selected_post)

@app.route('/blog/new', methods=['GET', 'POST'])
def newBlogPost():
    posts = session.query(BlogPost).all()
    if request.method == 'POST':
        newPost = BlogPost(
            title = request.form['title'],
            subtitle = request.form['subtitle'],
            authorName = request.form['authorName'],
            authorImg = request.form['authorImg'],
            authorDescription = request.form['authorDescription'],
            mainImg = request.form['mainImg'],
            date = request.form['date'],
            img_1 = request.form['img_1'],
            body_header_1 = request.form['body_header_1'],
            body_1 = request.form['body_1'],
            img_2 = request.form['img_2'],
            body_header_2 = request.form['body_header_2'],
            body_2 = request.form['body_2'],
            img_3 = request.form['img_3'],
            body_header_3 = request.form['body_header_3'],
            body_3 = request.form['body_3'],
            img_4 = request.form['img_4'],
            body_header_4 = request.form['body_header_4'],
            body_4 = request.form['body_4'],
            img_5 = request.form['img_5'],
            body_header_5 = request.form['body_header_5'],
            body_5 = request.form['body_5'],
            img_6 = request.form['img_6'],
            body_header_6 = request.form['body_header_6'],
            body_6 = request.form['body_6'],
            img_7 = request.form['img_7'],
            body_header_7 = request.form['body_header_7'],
            body_7 = request.form['body_7'],
            img_8 = request.form['img_8'],
            body_header_8 = request.form['body_header_8'],
            body_8 = request.form['body_8'],
            img_9 = request.form['img_9'],
            body_header_9 = request.form['body_header_9'],
            body_9 = request.form['body_9'],
            img_10 = request.form['img_10'],
            body_header_10 = request.form['body_header_10'],
            body_10 = request.form['body_10']
        )
        session.add(newPost)
        session.commit()
        flash("%s has been posted sucessfully!" % newPost.title)
        return redirect(url_for('showBlog'))
    else:
        return render_template('new_blog_post.html', posts = posts)

@app.route('/blog/<int:blogPost_id>/edit', methods=['GET', 'POST'])
def editBlogPost(blogPost_id):
    editedPost = session.query(BlogPost).filter_by(id=blogPost_id).one()
    if request.method == 'POST':
        if request.form['title']:
            editedPost.title = request.form['title']
        if request.form['subtitle']:
            editedPost.subtitle = request.form['subtitle']
        if request.form['authorName']:
            editedPost.authorName = request.form['authorName']
        if request.form['authorImg']:
            editedPost.authorImg = request.form['authorImg']
        if request.form['authorDescription']:
            editedPost.authorDescription = request.form['authorDescription']
        if request.form['mainImg']:
            editedPost.mainImg = request.form['mainImg']
        if request.form ['date']:
            editedPost.date = request.form['date']
        if request.form['img_1']:
            editedPost.img_1 = request.form['img_1']
        if request.form['body_header_1']:
            editedPost.body_header_1 = request.form['body_header_1']
        if request.form['body_1']:
            editedPost.body_1 = request.form['body_1']
        if request.form['img_2']:
            editedPost.img_2 = request.form['img_2']
        if request.form['body_header_2']:
            editedPost.body_header_2 = request.form['body_header_2']
        if request.form['body_2']:
            editedPost.body_2 = request.form['body_2']
        if request.form['img_3']:
            editedPost.img_3 = request.form['img_3']
        if request.form['body_header_3']:
            editedPost.body_header_3 = request.form['body_header_3']
        if request.form['body_3']:
            editedPost.body_3 = request.form['body_3']
        if request.form['img_4']:
            editedPost.img_4 = request.form['img_4']
        if request.form['body_header_4']:
            editedPost.body_header_4 = request.form['body_header_4']
        if request.form['body_4']:
            editedPost.body_4 = request.form['body_4']
        if request.form['img_5']:
            editedPost.img_5 = request.form['img_5']
        if request.form['body_header_5']:
            editedPost.body_header_5 = request.form['body_header_5']
        if request.form['body_5']:
            editedPost.body_5 = request.form['body_5']
        if request.form['img_6']:
            editedPost.img_6 = request.form['img_6']
        if request.form['body_header_6']:
            editedPost.body_header_6 = request.form['body_header_6']
        if request.form['body_6']:
            editedPost.body_6 = request.form['body_6']
        if request.form['img_7']:
            editedPost.img_7 = request.form['img_7']
        if request.form['body_header_7']:
            editedPost.body_header_7 = request.form['body_header_7']
        if request.form['body_7']:
            editedPost.body_7 = request.form['body_7']
        if request.form['img_8']:
            editedPost.img_8 = request.form['img_8']
        if request.form['body_header_8']:
            editedPost.body_header_8 = request.form['body_header_8']
        if request.form['body_8']:
            editedPost.body_8 = request.form['body_8']
        if request.form['img_9']:
            editedPost.img_9 = request.form['img_9']
        if request.form['body_header_9']:
            editedPost.body_header_9 = request.form['body_header_9']
        if request.form['body_9']:
            editedPost.body_9 = request.form['body_9']
        if request.form['img_10']:
            editedPost.img_10 = request.form['img_10']
        if request.form['body_header_10']:
            editedPost.body_header_10 = request.form['body_header_10']
        if request.form['body_10']:
                    editedPost.body_10 = request.form['body_10']
        session.add(editedPost)
        session.commit()
        flash("%s has been updated." % editedPost.title)
        return redirect(url_for('showBlog'))
    else:
        return render_template('edit_blog_post.html', editedPost=editedPost, blogPost_id=blogPost_id)

@app.route('/blog/<int:blogPost_id>/delete/', methods=['GET', 'POST'])
def deleteBlogPost(blogPost_id):
    deletedPost = session.query(BlogPost).filter_by(id=blogPost_id).one()
    if request.method == 'POST':
        session.delete(deletedPost)
        session.commit()
        flash("%s has been sucessfully deleted." % deletedPost.title)
        return redirect(url_for('showBlog'))
    else:
        return render_template('delete_blog_post.html', deletedPost=deletedPost, blogPost_id=blogPost_id)

@app.route('/interactive_map')
def showInteractiveMap():
    return render_template('interactive_map.html')

if __name__ == '__main__':
    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=8000)
