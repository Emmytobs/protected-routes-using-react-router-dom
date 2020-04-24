import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import auth from './auth'

function ProtectedAppRoute({component: Component, ...remainingProps}) {
  return (
    <Route {...remainingProps} 
      render={(props) => {
        if(auth.isAuthenticated()) {
          console.log(props);
          return <Component {...props} />
        } else {
          return <Redirect to ={{
            pathname: '/',
            state: {
              from: props.location
            }
          }} />
        }
      }}
    />
  )
}

export default ProtectedAppRoute;
