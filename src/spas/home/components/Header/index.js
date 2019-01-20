import React, { Component } from 'react'
import { Link } from '@reach/router'
import { HOME, GAME } from '../../../../utils/constants'
import 'bulma/css/bulma.css'

class Header extends Component {
  render() {
    return (
      <header className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to={HOME}>
              <h1>Home</h1>
            </Link>
            <Link className="navbar-item" to={GAME}>
              <h1>Game</h1>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
