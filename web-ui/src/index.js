import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.css'

import { Stitch } from 'mongodb-stitch-browser-sdk'
const APP_ID = '<STITCH APP ID>'

class StitchApp extends Component {
  static propTypes = {
    appId: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.appId = props.appId
    this.client = Stitch.initializeDefaultAppClient(this.appId)
  }

  render() {
    const title = 'My Tiny App StAR Template'

    return <div>{title}</div>
  }
}

ReactDOM.render(<StitchApp appId={APP_ID} />, document.getElementById('app'))

module.hot.accept()
