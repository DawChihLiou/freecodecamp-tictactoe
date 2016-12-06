import React from 'react'
import App from '../containers/App'
import Header from './Header'
import Footer from './Footer'

const Main = () => (
  <div className="container-fluid margin-top-md">
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <Header />
        <App />
        <Footer />
      </div>
    </div>
  </div>
)

export default Main
