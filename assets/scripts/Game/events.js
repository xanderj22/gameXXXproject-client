'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

let playerTurn = 0
let gameWon = false
// Creating empty array to store data
let storeValues = ['', '', '', '', '', '', '', '', '']

const onCreateGameClick = function (event) {
  event.preventDefault()
  api.createGame()
    .then(storeGameID)
  // console.log('success on creating game')
  // console.log('stored token is', store.user.token)
  // .then(console.log)
  // .catch(console.error)
}
const storeGameID = function (apiGamedata) {
  // console.log(apiGamedata)
  store.GameID = apiGamedata.game.id
  $('.grid-container').css('display', 'grid')
}

const onReplayGameClick = function (event) {
  event.preventDefault()
  // **To increment number of games played (Games Talley after
  // replaying games during the same sign-in session (added api.createGame)
  api.createGame()
  // .then()
  // console.log('success on replaying game')
  // Clearing stored game data from last game (onReplayGameClick)
  storeValues = ['', '', '', '', '', '', '', '', '']
  playerTurn = 0
  gameWon = false
  // Clearing the game board/physical display from previous game
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text('')
  }
}

const onGameInfo = function (event) {
  event.preventDefault()
  api.storeGame()
    .then(ui.storeGameSuccess)
    .catch(ui.storeGameFailure)
}
// Sending data to api based on index (grid cell) clicked and updating store
const onGridItemClick = event => {
  event.preventDefault()
  // Not sure about the apiData
  const apiData = {
    game: {
      cell: {
        index: event.currentTarget.id,
        value: ''
      },
      over: false
    }
  }

  if (gameWon === false) {
    // console.log('grid click successful')
    // console.log(event.currentTarget.id)
    const gridID = event.currentTarget.id
    if (storeValues[gridID] === '') {
      if (playerTurn % 2 === 0) {
        storeValues[gridID] = 'X'
        apiData.game.cell.value = 'x'
      } else {
        storeValues[gridID] = 'O'
        apiData.game.cell.value = 'o'
      }
      // Determining who current is and assigns X or O accordingly
      const currentPlayer = addXO(gridID)
      winTest(currentPlayer)
      if (gameWon === true) {
        apiData.game.over = true
      }
      // incrementing moves/player turn by 1
      playerTurn += 1 // Same as playerTurn = playerTurn +1
      // console.log(storeValues)
      api.updateGame(apiData)
    }
  }
}

// This should go in ui.js ??
const addXO = gridID => {
// Get the html object with the ID value of whatever gridID is set to
  let currentPlayer
  if (playerTurn % 2 === 0) {
    $(`#${gridID}`).text('X')
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
    $(`#${gridID}`).text('O')
  }
  return currentPlayer
}

// // Setting up logic to interact with grid
const winValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

// Logic to determine winner and provide user response
function winTest (currentPlayer) {
  for (let i = 0; i < winValues.length; i++) {
    const w = winValues[i]

    // Iterating through the winValues combinations to determine if there's a winning or tie combination
    if (storeValues[w[0]] === storeValues[w[1]] && storeValues[w[1]] === storeValues[w[2]] && storeValues[w[0]] !== '') {
      // console.log('victory')
      gameWon = true
      $('#message').text('You Win!! ' + currentPlayer)
      setTimeout(clearText, 3600)
    } else if (playerTurn === 8) {
      // console.log('game is a tie')
      $('#message').text('Tie Game. Play Again!')
      setTimeout(clearText, 3600)
    }
  }
}

const clearText = function () {
  document.getElementById('message').textContent = ''
}

module.exports = {
  onCreateGameClick,
  onReplayGameClick,
  onGridItemClick,
  onGameInfo
}
