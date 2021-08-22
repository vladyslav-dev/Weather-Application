import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import UpdatePage from '../pages/UpdatePage'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/update/:id" component={UpdatePage} />
            <Redirect to="/home" />
        </Switch>
    )
}

export default Routes