import React from 'react';

class PrivateRoute extends React.Component {
  render(){
    return (
      <div>
        PrivateRoute
        {this.props.children}
      </div>
    )
  }
}

export default PrivateRoute;
