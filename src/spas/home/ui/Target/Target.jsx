import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GithubKitty from '../../github.svg';

class Target extends Component {
    static propTypes = {
        onClick: PropTypes.func
    }

    static defaultProps = {
        onClick: () => {}
    }

    targetClicked = () => {
        this.props.onClick();
    }

    render(){
        return (
            <div onClick={this.targetClicked}>
                <GithubKitty />
            </div>
        );
    }
}


export default Target;