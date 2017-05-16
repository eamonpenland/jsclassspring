import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import About from './About.js';
import Topic from './Topic.js';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Public = () => <h3>Public</h3>

const Protected = () => <h3>Protected</h3>

// const Private = () => <h3>Private</h3>

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
      <Route exact path={match.url} render={() => (
        <h3>Please select a Topic</h3>
      )}/>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 1000)
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign Out</button>
    </p>
  ) : (
    <p>You are not logged in!</p>
  )
))

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/'}}
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer){
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/public'>Public</Link></li>
        <li><Link to='/protected'>Protected</Link></li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
      <Route path='/public' component={Public} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/protected' component={Protected} />
    </div>
  </Router>
)

export default App;
