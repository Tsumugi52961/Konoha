import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Subscriptions from '@/components/subscriptions/subscriptions'
import SubscriptionForm from '@/components/subscriptions/subscription-form'

export default function SubscriptionRouter () {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <Subscriptions/>
      </Route>
      <Route exact path={`${path}/form`}>
        <SubscriptionForm/>
      </Route>
      <Route path={`${path}/:id`}>
        <SubscriptionForm/>
      </Route>
    </Switch>
  )
}
