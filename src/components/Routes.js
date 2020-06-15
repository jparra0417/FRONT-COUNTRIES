import React from 'react'
import { Switch, Route } from "react-router-dom";
import List from './List';
import Details from './Details';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/details/:id" component={Details} />
        </Switch>
    )
}

export default Routes
