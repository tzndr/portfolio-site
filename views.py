from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def showMain():
    return render_template('index.html')

@app.route('/featured_work')
def showFeaturedWork():
    return render_template('featured_work.html')

@app.route('/my_story')
def showMyStory():
    return render_template('my_story.html')

@app.route('/reach_out')
def showReachOut():
    return render_template('reach_out.html')


if __name__ == '__main__':
    app.run()
