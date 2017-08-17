import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Header from './pages/header/'
import Main from './pages/main'
import Footer from './pages/footer/'

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
