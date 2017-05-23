import React from 'react';
import AppBar from 'material-ui/AppBar';

const App = (props) => (
  <div className="App">
    <AppBar
      title='ChatterBox'
    />
    {props.children}
  </div>
)


export default App;
