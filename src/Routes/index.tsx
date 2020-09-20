import React from 'react';

import {  Switch, BrowserRouter, HashRouter} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import Route from './Route'

const Routes: React.FC = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    </HashRouter>
    
  );
}

export default Routes;