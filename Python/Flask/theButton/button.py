"""
FLASK_APP=button.py flask run
"""

from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def button():
    return render_template("home.html")
