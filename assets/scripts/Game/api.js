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

// TO DO--Increment games played during game session:
const storeGame = function () {
  // console.log('getting game info')
  return $.ajax({
    url: config.apiUrl + '/games',
    // url: config.apiUrl + 'games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
    // 'userId': store.user.id
    // data: {}
  })
}

module.exports = {
  createGame,
  updateGame,
  storeGame
}
