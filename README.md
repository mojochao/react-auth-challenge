Build an Authenticated User App with ReactJS
============================================

This challenge will require you to create a React web application 
capable of supporting user authentication.  Basic React boilerplate
has been provided, as well as a library providing simulated user
authentication.

## Installation

```
$ git clone https://github.com/mojochao/react-auth-challenge.git
$ cd react-auth-challenge
$ npm install
$ npm start
$ open http://localhost:3000
```

At this point you should review the requirements and implement the
application.

## Requirements

The application must provide the following four views:
* an unprotected login view accessible at /login route
* an unprotected view accessible at /public route
* a protected view
* a protected logout view 

All views must contain a common header displaying:
* 'sign in' or 'sign out' link depending on the user's auth state
* a link to the 'public' view
* a link to the 'private' view

Additionally, each view type must display its own content:
* the login view must provide a form for entering email and password credentials.
* the logout view simply displays that the user is logged out.
* the public view simply displays 'Public View'.
* the private view simply displays 'Private View' and the user's auth token.

### Source Code

You will implement your application in the src/app.js module.

The auth.js module will be used by your application, and will not need 
to be modified.
