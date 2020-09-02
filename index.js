const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const teams = require('./teams')
const { getAllTeams, getTeamsByID, saveNewTeam } = require('./controllers/teamsController')
// const getTeamsByID = require('./controllers/teamsController').getTeamsByID

app.get('/', getAllTeams)
app.get('/:id', getTeamsByID)

app.post('/', bodyParser.json(), saveNewTeam)

// or
// app.use(bodyParser.json())
// app.post('/', saveNewTeam)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
