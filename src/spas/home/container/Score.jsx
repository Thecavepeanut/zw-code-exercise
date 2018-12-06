import React, { Component } from 'react';
import Score from '../ui/Score.jsx';
import { Context } from './StateManager.jsx';

class ScoreContainer extends Component {
    render() {
        return <Context.Consumer>{({ state }) => <Score score={state.score} />}</Context.Consumer>;
    }
}

export default ScoreContainer;
