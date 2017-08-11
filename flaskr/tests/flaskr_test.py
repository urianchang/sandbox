import os
# Fix for importing flaskr class
import sys
sys.path.append('../flaskr')
from flaskr import flaskr
import unittest
import tempfile

class FlaskrTestCase(unittest.TestCase):

    # Create new test client and initializes new database
    def setUp(self):
        # mkstemp(): returns low-level file handle and random file name (database name)
        self.db_fd, flaskr.app.config['DATABASE'] = tempfile.mkstemp()
        flaskr.app.testing = True
        self.app = flaskr.app.test_client()
        with flaskr.app.app_context():
            flaskr.init_db()

    # Close file and remove it from filesystem (delete db)
    def tearDown(self):
        os.close(self.db_fd)
        os.unlink(flaskr.app.config['DATABASE'])

    # First test: App shows 'No entries here so far' at root
    def test_empty_db(self):
        # Send HTTP GET request to app with given path
        rv = self.app.get('/')
        # Return value will be response_class object
        assert b'No entries here so far' in rv.data

    # Logging in
    def login(self, username, password):
        return self.app.post('/login', data=dict(
            username = username,
            password = password
        ), follow_redirects=True)

    # Logging out
    def logout(self):
        return self.app.get('/logout', follow_redirects=True)

    # Test logging in and out with invalid credentials
    def test_login_logout(self):
        rv = self.login('admin', 'default')
        assert b'You were logged in' in rv.data
        rv = self.logout()
        assert b'You were logged out' in rv.data
        rv = self.login('adminx', 'default')
        assert b'Invalid username' in rv.data
        rv = self.login('admin', 'defaultx')
        assert b'Invalid password' in rv.data

    # Test adding messages
    def test_messages(self):
        self.login('admin', 'default')
        rv = self.app.post('/add', data=dict(
            title = '<Hello>',
            text = '<strong>HTML</strong> allowed here'
        ), follow_redirects=True)
        assert b'No entries here so far' not in rv.data
        assert b'&lt;Hello&gt;' in rv.data
        assert b'<strong>HTML</strong> allowed here' in rv.data

if __name__ == '__main__':
    unittest.main()
