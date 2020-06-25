import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from './Header';
import WelcomePage from './Welcome';
import Signup from './Signup';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={WelcomePage} exact='true' />
            <Route path='/Signup' component={Signup} />            
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;