# #!/bin/bash

curl --include --request POST 'https://tic-tac-toe-wdi.herokuapp.com/sign-up' \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "mytestuser@test.com",
      "password": "123",
      "password_confirmation": "123"
    }
  }'
