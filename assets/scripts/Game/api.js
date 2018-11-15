const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}
// Not sure about the apiData
const updateGame = function (apiData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.GameID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: apiData
  })
}
// TO DO:
// const storeGame = function () {
  // return $.ajax({
    // url: config.apiUrl + '/games/' + store.GameID,
    // method: 'GET',
    // headers: {
      // Authorization: 'Token token=' + store.user.token
    // },
    // data: {}
  // })
// }

module.exports = {
  createGame,
  updateGame
  // storeGame
}
