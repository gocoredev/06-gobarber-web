import React from 'react';
import {RouteProps as ReactRouteProps, Route as ReactRouter, Redirect} from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext';

// import { Container } from './styles';

interface RouteProps extends ReactRouteProps {
    isPrivate?:boolean;
    component: React.ComponentType
}


const Route: React.FC<RouteProps> = ({isPrivate = false, component: Component ,...rest}) => {
    
    const {user} = useAuth()

    return (
        <ReactRouter {...rest} render={({location})=>{
            return isPrivate === !!user ? (
                <Component />
            ) : (<Redirect to={{pathname: isPrivate ? '/' : '/dashboard', state: {from: Location}}} />)
        }}/>
  );
}

export default Route;