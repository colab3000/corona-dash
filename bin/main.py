from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hewwo():
    return "hewwo"

@app.route('/home')
def homepage():
    return render_template("dashboard.html")

@app.route('/mapp')
def mapp():
    pass
