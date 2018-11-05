from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def showMain():
    return render_template('index.html')

@app.route('/featured_work')
def showFeaturedWork():
    return render_template('featured_work.html')


if __name__ == '__main__':
    app.secret_key = 'Magnesium21!'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)