// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = item
  const color = matchStatus === 'Lost' ? 'red' : 'green'
  return (
    <li className="match-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <h1 className="match-card-heading">{competingTeam}</h1>
      <p className="match-card-result">{result}</p>
      <p className={`match-status ${color}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
