import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'
import App from './components/App'

const AppContext = createContext()

class HomeSPA extends Component {
  render() {
    return (
      <AppContext.Provider>
        <App />
      </AppContext.Provider>
    )
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
