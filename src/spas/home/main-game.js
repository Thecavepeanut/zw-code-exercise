import React, {Component} from 'react';
import Target from './target';
import GithubKitty from './github.svg'

class MainGame extends Component {

    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
        this.targetEl = React.createRef();
        //this.moveTarget = this.moveTarget.bind(this);
    }

    componentDidMount() {
        this.moveTarget();
        this.interval = setInterval(() => {
            this.moveTarget();
        
        }, 413.8 * 2)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    clicked() {
        console.log('clicked');
        this.props.updateScore();
    }

    getNewTargetLocation() {
        let w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
        let h = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
        let randX = Math.floor(Math.random() * (w - 100));
        let randY = Math.floor(Math.random() * (h - 104));

        return [randX, randY];
    }

    moveTarget() {
        let loc = this.getNewTargetLocation();
        this.targetEl.style.top = loc[1] + 'px';
        this.targetEl.style.left = loc[0] + 'px';
    }

    render(){
        return (
            <div className="main-game-screen">
                <div className="target" 
                    onClick={this.clicked}
                    ref={(target) => this.targetEl = target}>
                    <GithubKitty />
                </div>
            </div>
        );
    }
}

export default MainGame;