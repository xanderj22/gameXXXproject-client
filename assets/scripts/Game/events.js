'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('./../store.js')

let playerTurn = 0
let gameWon = false
let storeValues = ['', '', '', '', '', '', '', '', '']

const onCreateGameClick = function (event) {
  event.preventDefault()
  api.createGame()
    .then(storeGameID)
  console.log('success on creating game')
  console.log('stored token is', store.user.token)
  // .then(console.log)
  // .catch(console.error)
}
const storeGameID = function (apiGamedata) {
  console.log(apiGamedata)
  store.GameID = apiGamedata.game.id
  $('.grid-container').css('display', 'grid')
}

const onReplayGameClick = function (event) {
  event.preventDefault()
  // Don't need: // api.replayGame()
  console.log('success on replaying game')
  storeValues = ['', '', '', '', '', '', '', '', '']
  playerTurn = 0
  gameWon = false
  for (let i = 0; i < 9; i++) {
    $(`#${i}`).text('')
  }
}

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
    console.log('grid click successful')
    console.log(event.currentTarget.id)
    const gridID = event.currentTarget.id
    if (storeValues[gridID] === '') {
      if (playerTurn % 2 === 0) {
        storeValues[gridID] = 'X'
        apiData.game.cell.value = 'x'
      } else {
        storeValues[gridID] = 'O'
        apiData.game.cell.value = 'o'
      }

      addXO(gridID)
      winTest()
      if (gameWon === true) {
        apiData.game.over = true
      }
      // incrementing moves/player turn by 1
      playerTurn += 1 // Same as playerTurn = playerTurn +1
      console.log(storeValues)
      api.updateGame(apiData)
    }
  }
}

// This should go in ui.js
const addXO = gridID => {
// get the html object with the ID value of whatever gridID is set to
  if (playerTurn % 2 === 0) {
    $(`#${gridID}`).text('X')
  } else {
    $(`#${gridID}`).text('O')
  }
}

// Start on creating game object
// const cellData = getFormFields(event.target)
// console.log(cellData)
// const data = {
//   game: {
//     cell: {
//       index: cellData.cell.index,
//       value: cellData.cell.value
//     }
//   },
//   over: false
// }

// TO do ==> See notes from Danny's one on one help session 11/05/2018
// Keep track of Xs and Os [set up index] (done)
// Save response from server in ui.handleSuccessfulCreate
// Put the game object in store
// api.updateGame()
//   .then(console.log) // ui.handleSuccessfulCreate
//   .catch(console.error)
// }

// // set up logic to interact with grid
const winValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

function winTest () {
  for (let i = 0; i < winValues.length; i++) {
    let w = winValues[i];

    if (storeValues[w[0]] === storeValues[w[1]] && storeValues[w[1]] === storeValues[w[2]] && storeValues[w[0]] !== '') {
      console.log('victory')
      gameWon = true
      $('#message').text('You Win!!')
    }
    else if (playerTurn === 8) {
      console.log('game is a tie')
      $('#message').text('Tie Game. Play Again!')
    }
  }
}

// From book example:
// const data = getFormFields(event.target)
// api.changePassword(data)
//  .then(ui.changePasswordSuccess)
//  .catch(ui.changePasswordFailure)*

module.exports = {
  onCreateGameClick,
  onReplayGameClick,
  onGridItemClick
}
