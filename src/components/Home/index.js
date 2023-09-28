// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getDashboard()
  }

  getDashboard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="home-div">
        <div className="main-heading-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="log-img"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="body-div">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height="50px" width="50px" />
            </div>
          ) : (
            <ul className="teams-list">
              {teamsData.map(item => (
                <TeamCard item={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
