from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

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

@app.route('/cminc_demo')
def showCommunityMatters():
    return render_template('cminc_index.html')

if __name__ == '__main__':
    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=8000)
