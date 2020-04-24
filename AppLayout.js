import React from 'react';

function AppLayout(props) {

  return (
    <>
      <h1>App Layout</h1>
      <button onClick={() => {
        props.history.push('/');
      }}>Logout</button>
    </>
  )
}

export default AppLayout;
