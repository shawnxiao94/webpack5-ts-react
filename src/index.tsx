import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/assets/styles/index.less';

import registerServiceWorker from './sw'
registerServiceWorker()

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById('app'))
}

render(App)

/**
 * 启动热加载
 */
// eslint-disable-next-line
console.log(module)
// if (module?.hot) {
//   module?.hot.accept()
// }