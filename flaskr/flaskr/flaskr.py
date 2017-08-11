'''
For a cleaner solution, create a separate
.ini or .py file, load that, and import the
values from there.
'''
import os
import sqlite3
from flask import Flask, request, session, g, redirect,
    url_for, abort, render_template, flash

# Create the application instance
app = Flask(__name__)
# Load config from this file, flaskr.py
app.config.from_object(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE = os.path.join(app.root_path, 'flaskr.db')
    SECRET_KEY = 'development key',
    USERNAME = 'admin',
    PASSWORD = 'default'
))
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

# Method for easy connections to specified database
def connect_db():
    rv = sqlite3.connect(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv

# Opens new db connection if there is none yet for current app context
def get_db():
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db

# Functions marked with teardown_appcontext() are called every time app context tears down
@app.teardown_appcontext
# Closes db again at end of request
def close_db(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()
