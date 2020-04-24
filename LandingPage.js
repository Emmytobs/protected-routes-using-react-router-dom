import React from 'react';
import auth from './auth.js'

function LandingPage(props) {

  return (
    <>
      <h1>Landing Page</h1>
      <button onClick={()=> {
        auth.login(() => {
          if(auth.isAuthenticated()) {
            props.history.push('/app')
          }
        })
      }}>Login</button>
    </>
  )
}

export default LandingPage;
