import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Segment, Form, Icon, Message, Button } from 'semantic-ui-react'

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      userInput: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  }

  handleChange = (e, { name, value }) => {
    return this.setState(prevState => ({
      userInput: { ...prevState.userInput, [name]: value }
    }))
  }

  render() {
    const {
      errorMessage,
      userInput: { email, password }
    } = this.state

    const { loginUser } = this.props

    return (
      <Segment.Group>
        <Segment>
          <Form
            onSubmit={() => {
              loginUser('email', { email, password }).catch(err => {
                this.setState({ errorMessage: err.message })
              })
            }}
          >
            <Form.Input
              fluid
              label="Email"
              name="email"
              placeholder="someone@example.com"
              defaultValue={email}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              defaultValue={password}
              onChange={this.handleChange}
            />
            {errorMessage && (
              <Message negative header="Login Failed" content={errorMessage} />
            )}
            <Form.Button type="submit" primary>
              <Icon name="mail" />Log In with Email/Password
            </Form.Button>
          </Form>
        </Segment>
        <Segment>
          <Button
            onClick={() => {
              loginUser('facebook')
            }}
            color="facebook"
          >
            <Icon name="facebook" />Log In with Facebook
          </Button>
        </Segment>
        <Segment>
          <Button
            onClick={() => {
              loginUser('google')
            }}
            color="google plus"
          >
            <Icon name="google" />Log In with Google
          </Button>
        </Segment>
      </Segment.Group>
    )
  }
}

export default Login
