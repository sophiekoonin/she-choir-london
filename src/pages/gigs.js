import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { getEvents } from '../utils/calendar'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Gigs extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    getEvents().then(events => this.setState({ events }))
  }

  render() {
    const { events } = this.state
    return (
      <div className="common__container">
        <div className="page__header">
          <h1>Upcoming events</h1>
        </div>
        <div>
          <BigCalendar style={{ height: '420px' }} events={events} />
        </div>
      </div>
    )
  }
}

export default Gigs
