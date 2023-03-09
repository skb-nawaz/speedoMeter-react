// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Increment = () => {
    const {speed} = this.state
    if (speed >= 0 && speed < 200) {
      this.setState(preState => ({
        speed: preState.speed + 10,
      }))
    }
  }

  Decrement = () => {
    const {speed} = this.state
    if (speed > 0 && speed <= 200) {
      this.setState(preState => ({
        speed: preState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          className="imgStyle"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SPEEDOMETER"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-box">
          <button onClick={this.Increment}>Accelerate</button>
          <button onClick={this.Decrement}>Apply Brake</button>
        </div>
      </div>
    )
  }
}
export default Speedometer
