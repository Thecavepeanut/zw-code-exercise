import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'

import GameContainer from './containers/GameContainer'

class HomeSPA extends Component {
    render(){
        return (
            <div className='home-spa-container'>
                <GameContainer />
            </div>
        )
    }
}

export default HomeSPA
