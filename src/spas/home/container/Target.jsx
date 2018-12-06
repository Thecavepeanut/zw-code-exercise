import React, { Component } from 'react';
import Target from '../ui/Target.jsx';
import { Context } from './StateManager.jsx';

class TargetContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {({ actions }) => <Target onClick={actions.incrementScore} />}
            </Context.Consumer>
        );
    }
}

export default TargetContainer;
