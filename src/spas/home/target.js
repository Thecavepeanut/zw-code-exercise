import React, {Component} from 'react';
import GithubKitty from './github.svg'

class Target extends Component {

    constructor(props) {
        super(props);
        this.height = props.height;
        this.width = props.width;
        this.pulse = props.pulse;

        this.targetEl = React.createRef();
    }

    changeColor() {

    }

    render(){
        return (
            <div className="target" 
                onClick={this.props.clicked}
                style={{top: this.props.location[1] + 'px'}}>
                <GithubKitty />
            </div>
        );
    }
}

export default Target;