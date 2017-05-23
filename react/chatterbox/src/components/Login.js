import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col} from 'react-flexbox-grid';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';

const Login = (props) => {
  return (
    <Row center='md'>
      <Col md={6}>
        <Paper zDepth={4}>
          <Grid fluid>
            <Row center='md'>
              <Col xs={6} md={10}>
                <Card style={{margin: 40}}>
                  <CardHeader
                    title='Login'
                    titleStyle={{fontSize: 28}}
                    subtitle='Login to get started.'
                  />
                  <TextField
                    floatingLabelText='Email'
                  />
                  <TextField
                    floatingLabelText='Password'
                    type='password'
                  />
                  <CardActions>
                    <FlatButton
                      onTouchTap={() => props.history.push('/signup')}
                      label='Signup'
                    />
                    <FlatButton
                      onTouchTap={() => props.history.push('/chatroom')}
                      label='Login'
                    />

                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Paper>
      </Col>
    </Row>
  )
}

export default Login;
