const express = require('express')
const app = express()
// const teams = require('./teams')
const { getAllTeams, getTeamsByID } = require('./controllers/teamsController')
// const getTeamsByID = require('./controllers/teamsController').getTeamsByID

app.get('/', getAllTeams)
app.get('/:id', getTeamsByID)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
