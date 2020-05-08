import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Bangumis from '@/components/bangumis/bangumis'

export default function BangumisRouter () {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <Bangumis/>
      </Route>
      <Route exact path={`${path}/form`}>
      </Route>
      <Route path={`${path}/:id`}>
      </Route>
    </Switch>
  )
}
