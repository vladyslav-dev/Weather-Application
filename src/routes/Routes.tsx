import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Form from '../components/Form'
import CardList from '../components/CardList'


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/home" component={() => <CardList />} />
            <Route exact path="/create" component={() => <Form type="CREATE" />} />
            <Route exact path="/update/:id" component={() => <Form type="UPDATE" />} />
            <Redirect to="/home" />
        </Switch>
    )
}

export default Routes