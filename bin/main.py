from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hewwo():
    #content = open('test.jpg', 'r')
    return render_template('dashboard.html',image=content)
