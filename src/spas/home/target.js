import React, {Component} from 'react';
import GithubKitty from './github.svg'

class Target extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: this.getNewTargetLocation(),
            color: ''
        }
        this.targetEl = React.createRef();
        this.colors = this.props.colors;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps){
        // Update component when beat is updated
        if(this.props.beat !== prevProps.beat) {
            this.onBeat();
        }
    }

    componentDidMount() {
        // Set initial color
        this.changeColor();
    }

    onBeat() {
        this.changeColor();
        this.rotateTarget();
        this.moveTarget();
    }

    moveTarget() {
        this.setState({
            location: this.getNewTargetLocation()
        })
        this.targetEl.style.top = this.state.location[1] + 'px';
        this.targetEl.style.left = this.state.location[0] + 'px';
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

    changeColor() {
        this.setState({color: this.props.colors[Math.floor(Math.random() * 5)]});
        this.targetEl.children[0].style.fill = this.state.color;
        console.log('color changed', this.state.color);
    }

    rotateTarget() {
        const randRotation = Math.floor(Math.random() * 360);
        this.targetEl.style.transform = `rotate(${randRotation}deg)`;
    }

    handleClick() {
        // Latency in updating the state causes false values, using fill color.
        this.props.clicked(this.targetEl.children[0].style.fill);
    }

    render(){
        return (
            <div className="target" 
                onClick={this.handleClick}
                ref={(target) => this.targetEl = target}>
                <GithubKitty />
            </div>
        );
    }
}

export default Target;