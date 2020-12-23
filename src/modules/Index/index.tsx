import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@index/assets/styles/index.less'

import registerServiceWorker from '@/sw'
registerServiceWorker()

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById('app'))
}

render(App)
