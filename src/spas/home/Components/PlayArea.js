import SnowballSVG from "../snowball.svg";
import React, {Component} from "react";
import '../styles.scss'

class PlayArea extends Component {
    constructor(props) {
        super(props);
        this.state = {rolling: false}

        this.rollSnowball = this.rollSnowball.bind(this)
        this.haltSnowball = this.haltSnowball.bind(this)
        this.snowballSize = this.snowballSize.bind(this)


        this.snowball = React.createRef()
    }

    rollSnowball(props) {
        if (this.state.rolling) {
            return
        }
        props.handleClick();
        this.setState({rolling: true})
    }

    haltSnowball() {
        this.setState({rolling: false})
    }

    snowballSize(count) {
        const modifier = () => ({
            [true]: 0,
            [count < 5]: count * 30,
            [count >=5 && count < 8]: (count - 5) * 35,
            [count >= 8]: (count - 8) * 20
        }).true

        const size = 100 + modifier() + 'px';

        return ({ width: size,
        height: size })
    }

    componentDidUpdate() {
        if (this.state.rolling) {
            this.snowball.current.addEventListener("animationend", this.haltSnowball)
        }
    }

    render(){
        return (
            <div className="play-area">
                <div className="snowball-container">
                    <div onClick={() => {this.rollSnowball(this.props)}}
                         className={this.state.rolling ? 'rolling' : ''}
                         style={this.snowballSize(this.props.count)}
                         ref={this.snowball}>
                        <SnowballSVG />
                    </div>
                </div>
            </div>
        )
    }

}

export default PlayArea
