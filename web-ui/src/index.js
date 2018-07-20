import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Container, Header } from 'semantic-ui-react'

import Login from './Login'
import UserInfo from './UserInfo'

import './index.css'
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker'

import {
  Stitch,
  UserPasswordCredential,
  FacebookRedirectCredential,
  GoogleRedirectCredential
} from 'mongodb-stitch-browser-sdk'
const APP_ID = 'tiny-auth-cornj'

class StitchApp extends Component {
  static propTypes = {
    appId: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.appId = props.appId
    this.client = Stitch.initializeDefaultAppClient(this.appId)

    const isAuthed = this.client.auth.isLoggedIn
    this.state = { isAuthed }
  }

  componentDidMount() {
    if (this.client.auth.hasRedirectResult()) {
      this.client.auth.handleRedirectResult().then(user => {
        this.setState({ isAuthed: this.client.auth.isLoggedIn })
      })
    }
  }

  login = async (type, { email, password } = {}) => {
    const { isAuthed } = this.state
    let credential

    if (isAuthed) {
      return
    }

    if (type === 'facebook') {
      credential = new FacebookRedirectCredential()
      this.client.auth.loginWithRedirect(credential)
    } else if (type === 'google') {
      credential = new GoogleRedirectCredential()
      this.client.auth.loginWithRedirect(credential)
    } else {
      credential = new UserPasswordCredential(email, password)
      await this.client.auth.loginWithCredential(credential)
      this.setState({ isAuthed: true })
    }
  }

  logout = async () => {
    this.client.auth.logout()
    this.setState({ isAuthed: false })
  }

  render() {
    const { isAuthed } = this.state
    return (
      <Container>
        <Header as="h1">Tiny Auth</Header>
        <p>
          A MongoDB Stitch example demonstrating authentication using
          Email/Password, Facebook, and Google.
        </p>
        {isAuthed ? (
          <UserInfo user={this.client.auth.user} logoutUser={this.logout} />
        ) : (
          <Login loginUser={this.login} />
        )}
      </Container>
    )
  }
}

ReactDOM.render(<StitchApp appId={APP_ID} />, document.getElementById('root'))
registerServiceWorker()
