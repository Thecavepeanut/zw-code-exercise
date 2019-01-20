import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
// import GithubKitty from './github.svg'
import './home.font'
import App from './components/App'

const AppContext = React.createContext()

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
