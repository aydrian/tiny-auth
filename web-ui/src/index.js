import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const title = 'My Tiny App StAR Template'

ReactDOM.render(<div>{title}</div>, document.getElementById('app'))

module.hot.accept()
