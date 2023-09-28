// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  changeCase = item => ({
    competingTeam: item.competing_team,
    competingTeamLogo: item.competing_team_logo,
    date: item.date,
    firstInnings: item.first_innings,
    id: item.id,
    manOfTheMatch: item.man_of_the_match,
    matchStatus: item.match_status,
    result: item.result,
    secondInnings: item.second_innings,
    umpires: item.umpires,
    venue: item.venue,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(teamMatchesApiUrl)
    const data = await response.json()
    const formattedData = {
      latestMatchDetails: this.changeCase(data.latest_match_details),
      recentMatches: data.recent_matches.map(item => this.changeCase(item)),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamDetails: formattedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {match} = this.props
    const {id} = match.params

    return (
      <div className={`match-details-page ${id}`}>
        {isLoading ? (
          <div className="details-Loading" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height="50px" width="50px" />
          </div>
        ) : (
          <div className="details-body">
            <img
              src={teamDetails.teamBannerUrl}
              alt="team banner"
              className="banner-img"
            />
            <h3 className="lt-text">Latest Matches</h3>
            <LatestMatch item={teamDetails.latestMatchDetails} />
            <ul className="teams-div">
              {teamDetails.recentMatches.map(eachItem => (
                <MatchCard item={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
