curl --include --request PATCH 'https://tic-tac-toe-wdi.herokuapp.com/games' \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'
