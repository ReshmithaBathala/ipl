// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.displayTeams()
  }

  displayTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const {teams} = jsonData
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="ipl-dashboard-main-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-main-container">
          {teamsList.map(each => (
            <TeamCard teamDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
