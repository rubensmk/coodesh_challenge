import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/page=1" />
                </Route>
                <Route path="/page=:page/:id?" exact component={Dashboard} />
            </Switch>
        </>
    );
};

export default Routes;