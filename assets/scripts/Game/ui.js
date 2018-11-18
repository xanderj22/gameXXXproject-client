'use strict'

const store = require('../store.js')
// Set this up to store user/player data from a successful request
// and make changes to UI in response to success or failure

const storeGameSuccess = data => {
  clearText()
  $('#message').append('Games played: ' + data.games.length)
  setTimeout(clearText, 3600)
  store.game = data
  document.getElementById('sign-in').reset()
  // console.log('storeGameSuccess ran. Data is :', data)
  // console.log(data.games)
}

const storeGameFailure = error => {
  $('#message').text('Error on updating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('storeGameFailure ran. Error is :', error)
}

const clearText = function () {
  document.getElementById('message').textContent = ''
}

module.exports = {

  storeGameSuccess,
  storeGameFailure
// createGameSuccess,
// createGameFailure
}
