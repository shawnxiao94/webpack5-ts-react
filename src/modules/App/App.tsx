import React from 'react'
import './index.less'
import img404 from '@/assets/images/404.png'
import bg_banner from '@/assets/images/bg_banner.png'

function App() {
  return (
    <div>
      App
      <br />
      <img src={img404} alt="" />
      {process.env.APP_ENVO}
      <br />
      {process.env.BASEURL}
      <br />
      {process.env.APP_ENV}
      <div className="test-bg"></div>
      <img width="100px" src={bg_banner} alt="" />
    </div>
  )
}

export default App
