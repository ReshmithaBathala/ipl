// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {lastMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = lastMatchDetails
    console.log(lastMatchDetails)
    return (
      <div className="latest-match-container">
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={competingTeam} />
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpire</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
