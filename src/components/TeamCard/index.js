// Write your code here
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    const {name, teamImageUrl, id} = item
    return (
      <Link to={`/team-matches/${id}`} className="linker">
        <li className="team-card">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
