import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Snowball from './snowball.svg'
import Snowflake from './icons/snowflake.svg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState(
            { count: this.state.count + 1 }
        );
    };

    render(){
        return (
            <div className="app">
                <h1>Do you want to build a snowman?</h1>
                <div>Clicks: {this.state.count}</div>
                <Snowflake />
                <div onClick={this.incrementCount}>
                    <Snowball />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('react-spa'))