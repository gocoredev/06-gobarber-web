import React from 'react';

import { Route, Switch, BrowserRouter} from 'react-router-dom'
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/signup" component={SignUp} />
            <Route exact poth="/" component={SignIn} />
        </Switch>
    </BrowserRouter>
    
  );
}

export default Routes;