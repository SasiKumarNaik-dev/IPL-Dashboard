// Write your code here

import './index.css'

const LatestMatch = props => {
  const {item} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = item
  return (
    <div className="lt-match-div">
      <div className="lt-inner-div">
        <div className="lt-1">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="text-lt">{venue}</p>
          <p className="text-lt">{result}</p>
        </div>
        <div className="lt-2">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-logo"
          />
        </div>
      </div>

      <div className="lt-3">
        <p className="heading">First Innings</p>
        <p className="text-lt">{firstInnings}</p>
        <p className="heading">Second Innings</p>
        <p className="text-lt">{secondInnings}</p>
        <p className="heading">Man of The Match</p>
        <p className="text-lt">{manOfTheMatch}</p>
        <p className="heading">Umpires</p>
        <p className="text-lt">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
