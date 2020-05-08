import React, { Component } from 'react'
import { getSubscriptions } from '@/api/subscriptions'
import './subscriptions.scss'
import { Link } from 'react-router-dom'

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
    return (
      <div className="subscriptions">
        { this.state.subscriptions.map(subscription => <Subscription { ...subscription } key={ subscription.id } />) }
        <Subscription />
      </div>
    )
  }
}

const Subscription = (props) => {
  if (!props.id) {
    return (
      <div className="subscription-container add-button">
        <Link to="/subscriptions/form">
          <SubscriptionCover isAdd={ true } />
        </Link>
      </div>
    )
  } else {
    return (
      <div className="subscription-container">
        <Link to={`/subscriptions/${props.id}`}>
          <SubscriptionCover {...props} />
          <span className="subscription-name">{props.name}</span>
        </Link>
      </div>
    )
  }
}

const SubscriptionCover = ({ cover, name, isAdd }) => {
  if (isAdd) {
    return (
      <div className="subscription-cover add">
        <span className="plus-icon cover-center">+</span>
      </div>
    )
  } else if (cover) {
    return (
      <div className="subscription-cover">
        <img alt={ name } src={ cover }/>
      </div>
    )
  } else {
    return (
      <div className="subscription-cover no-image">
        <span className='subscription-cover-holder cover-center'>{ name.slice(0, 1) }</span>
      </div>
    )
  }
}
