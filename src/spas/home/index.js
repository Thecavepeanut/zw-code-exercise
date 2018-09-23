
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GameMain from './gameMain'

class HomeSPA extends Component {
    render() {
        return (
            <GameMain winningTotal={10} />
        )
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
