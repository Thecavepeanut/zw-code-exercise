import SnowballSVG from "../snowball.svg";
import React, {Component} from "react";
import '../styles.scss'

class PlayArea extends Component {
    constructor(props) {
        super(props);
        this.state = {rolling: false}

        this.rollSnowball = this.rollSnowball.bind(this)
        this.haltSnowball = this.haltSnowball.bind(this)

        this.snowball = React.createRef()
    }

    rollSnowball() {
        this.setState({rolling: true})
    }

    haltSnowball() {
        this.setState({rolling: false})
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
                    <div onClick={() => {this.props.handleClick(); this.rollSnowball()}}
                         className={this.state.rolling ? 'rolling' : ''}
                         ref={this.snowball}>
                        <SnowballSVG />
                    </div>
                </div>
            </div>
        )
    }

}

export default PlayArea
