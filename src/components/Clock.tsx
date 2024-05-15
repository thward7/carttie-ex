import { Component } from 'react'

interface State {
  time: Date
}

class Clock extends Component<{}, State> {
  timerID!: number

  constructor(props: {}) {
    super(props)
    this.state = { time: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }

  render() {
    return (
      <div className='text-xs text-pink-400'>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock
