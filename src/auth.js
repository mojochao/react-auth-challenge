/*
 * This module exports a default auth object providing an authentication facade
 * for rapid interactive development of a minimal authenticated user application.
 * This auth object is also exported as a named export.
 * 
 * This module also exports a named export for the testCredentials object, containing
 * credentials for authenticating the test user account. 
 */

/**
 * Test user object containing login credentials.
 * @type {{email: string, password: string}}
 */
export const testCredentials = {
  email: 'testy@mctester.com',
  password: 'testme'
}

/**
 * Fake asynchronous login request function.
 * @param email
 * @param password
 * @param cb
 */
function fakeLogin(email, password, cb) {
  setTimeout(() => {
    if (email === testCredentials.email && password === testCredentials.password) {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}

/**
 * Auth object providing authentication facade.
 * @type {{getToken: (function()), login: (function(*=, *=, *=)), logout: (function(*=)), loggedIn: (function()), onChange: (function())}}
 */
export const auth = {
  /**
   * Get auth token for logged in user
   * @returns {string|*}
   */
  getToken() {
    return localStorage.token
  },
  /**
   * Login user with credentials.
   * @param email
   * @param password
   * @param cb - a callback function taking a single boolean argument indicated login status, true if logged in
   */
  login(email, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    fakeLogin(email, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },
  /**
   * Logout user.
   * @param cb - a callback function taking a single boolean argument indicated login status, true if logged in
   */
  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },
  /**
   * Is user logged in predicate function.
   * @returns {boolean}
   */
  loggedIn() {
    return !!localStorage.token
  },
  /**
   * Auth login status changed event handler.
   * This auth change event handler will be replaced by client code.
   * @param loggedIn - current login status, true if logged in
   */
  onChange(loggedIn) {
    // this auth change event handler will be replaced by user of auth object
  }
}

export default auth
