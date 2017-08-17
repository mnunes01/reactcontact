import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './pages/header/'
import Main from './pages/main'
import Footer from './pages/footer/'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    )
  }
};
export default App
