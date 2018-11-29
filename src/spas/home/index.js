import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Game from './Containers/Game'

class App extends Component {

    render(){
        return (
            <div className="app">
                <header>
                    <h1>Do you want to build a snowman?</h1>
                </header>
                <Game />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react-spa'))