'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
// const GameEvents = require('./Game/events.js')
const gameEvents = require('./game/events.js')

// On document ready (code below)
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Event listener goes here: i.e., "on.click"
  // $('#create-game').on('click', () => console.log('hey'))
  $('#create-game').on('click', gameEvents.onCreateGameClick)
  $('#replay-game').on('click', gameEvents.onReplayGameClick)
  $('.grid-item').on('click', gameEvents.onGridItemClick)
})
