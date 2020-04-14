import React, { Component } from 'react'
import { getSubscriptions } from '@/api/subscriptions'

export default class Subscriptions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subscriptions: []
    }
  }

  componentDidMount () {
    getSubscriptions().then(res => {
      this.setState({
        subscriptions: res.data
      })
    })
  }

  render () {
    const subscriptions = this.state.subscriptions.map(subscription =>
      <div className="subscription" key={ subscription.id }>
        { subscription.name }
      </div>
    )
    return (
      <div className="subscriptions">
        { subscriptions }
      </div>
    )
  }
}
