#!/bin/bash

# baseUrl = https://tic-tac-toe-wdi.herokuapp.com
# path = /games

curl --include --request POST 'https://tic-tac-toe-wdi.herokuapp.com/sign-in' \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "mytestuser@test.com",
      "password": "123"
    }
  }'
