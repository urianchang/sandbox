'''
Minimal Flask Application

To run...

    FLASK_APP=hello.py flask run

'''

# Import Flask
from flask import Flask
# Create instance of Flask class
app = Flask(__name__)

# Use 'route()' decorator to tell Flask which URL should trigger function
@app.route("/")
# Function is given a name which is also used to generate URLs for that
# particular function and returns the message we want to display in the browser
def hello():
    return "Hello World!"
