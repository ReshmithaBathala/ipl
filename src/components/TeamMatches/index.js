// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchData: {},
  }

  componentDidMount() {
    this.displayTeamMatches()
  }

  dataFormatting = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  displayTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()

    const updatedData = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetails: this.dataFormatting(jsonData.latest_match_details),
      recentMatches: jsonData.recent_matches.map(eachMatch =>
        this.dataFormatting(eachMatch),
      ),
    }
    this.setState({matchData: updatedData})
  }

  renderLatestMatch = () => {
    const {matchData} = this.state
    const {latestMatchDetails} = matchData
    console.log(latestMatchDetails)
    return (
      <div>
        <LatestMatch lastMatchDetails={latestMatchDetails} />
      </div>
    )
  }

  render() {
    const {matchData} = this.state
    const {teamBannerUrl} = matchData
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        <img src={teamBannerUrl} alt="Hi" className="clicked-banner-team" />
        {this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
