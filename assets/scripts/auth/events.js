'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to  our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if request was successful
    .catch(ui.signUpFailure) // if request failed, tell me why (Status Response Code)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to  our server
  // using an HTTP request (POST)
  api.signIn(data)
    .then(ui.signInSuccess) // if request was successful
    .catch(ui.signInFailure) // if request failed, tell me why (Status Response Code)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if request was successful
    .catch(ui.signOutFailure) // if request failed, tell me why (Status Response Code)
  $('.grid-container').css('display', 'none')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
