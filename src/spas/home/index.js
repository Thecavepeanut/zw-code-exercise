import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'

import GameController from "./gameController.js";

class HomeSPA extends Component {

  



  render() {
   
    return (
      <GameController />
    )
  }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));


