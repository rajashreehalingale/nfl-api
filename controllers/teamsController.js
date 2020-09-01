
const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamsByID = (request, response) => {
  const { id } = request.params

  console.log(teams)

  const foundTeam = teams.filter(team => team.id === parseInt(id))

  console.log(typeof id)

  return response.send(foundTeam)
}

module.exports = {
  getAllTeams,
  getTeamsByID
}
