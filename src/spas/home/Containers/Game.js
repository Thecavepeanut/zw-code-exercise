import React, {Component} from 'react'
import '../styles.scss'
import Counter from '../Components/Counter'
import Snowball from '../Components/Snowball'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, completed: false };

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        if (this.state.count < 10) {
            this.setState(
                { count: this.state.count + 1,
                    completed: (this.state.count + 1 >= 10 ? true : this.state.completed)
                }
            );
        }
    };

    render(){
        return (
            <div className="game">
                <Counter count={this.state.count} />
                <Snowball handleClick={this.incrementCount} completed={this.state.completed} />
            </div>
        )
    }
}


export default Game