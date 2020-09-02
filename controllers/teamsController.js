
const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamsByID = (request, response) => {
  const { id } = request.params

  const foundTeam = teams.filter(team => team.id === parseInt(id))

  return response.send(foundTeam)
}

const saveNewTeam = (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('The following fields are required:name, realname, firstapperance, slug')
  }
  const nextID = teams[teams.length - 1].id + 1

  console.log(nextID)

  const newTeam = {
    nextID, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return response.status(201).send('Successfully added new team')
}

module.exports = {
  getAllTeams,
  getTeamsByID,
  saveNewTeam
}
