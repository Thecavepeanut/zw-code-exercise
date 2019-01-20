import React from 'react'
import { Router } from '@reach/router'

import Header from '../Header'
import HomePage from '../../pages/HomePage'
import GamePage from '../../pages/GamePage'

import { HOME, GAME } from '../../../../utils/constants'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Router>
          <HomePage path={HOME} />
          <GamePage path={GAME}/>
        </Router>
      </div>
    </div>
  )
}

export default App
