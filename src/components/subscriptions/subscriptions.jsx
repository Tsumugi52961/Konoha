import React, { Component } from 'react';
import { getSubscriptions } from "src/api/subscriptions";

export default class Subscriptions extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      subscriptions: []
    }
  }

  componentDidMount () {
    getSubscriptions().then(res => {
      console.log(res);
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
    );
    return (
      <div className="subscriptions">
        { subscriptions }
      </div>
    )
  }
}
