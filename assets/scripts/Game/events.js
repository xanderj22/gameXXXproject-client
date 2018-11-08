'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('./../store.js')


const onCreateGameClick = function (event) {
  event.preventDefault()
  // api.createGame
  console.log('success on creating game')
  console.log('stored token is', store.user.token)
  // .then(console.log)
  // .catch(console.error)
}

const onGridItemClick = event => {
  event.preventDefault()
  console.log('was grid click successful')
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
  // Make something happen -- display an X or O on click
  // Change turn
  // Keep track of Xs and Os [set up index]
  // Save response from server in ui.handleSuccessfulCreate
  // Put the game object in store
  // api.updateGame()
  //   .then(console.log) // ui.handleSuccessfulCreate
  //   .catch(console.error)
  // }


// // set up logic to interact with grid
// const winValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]
//
// function winTest () {
//     for (i = 0; i < winValues.length; i++) {
//       let sum = 0;
//       let w = winValues[i];
//     }
//
//     if (sum === 3) {
//       return true;
//     } else {
//
//   return false;
//
// }
//
// // Did user win, lose, or tie
// let result = winTest();
// }

// Make something happen -- display an X or O on click
// Change turn
// Keep track of Xs and Os [set up index]
// Is game over
// How to restart/replay

  // From book example:
  // const data = getFormFields(event.target)
  // api.changePassword(data)
  //  .then(ui.changePasswordSuccess)
  //  .catch(ui.changePasswordFailure)*


module.exports = {
  onCreateGameClick,
  onGridItemClick
}
