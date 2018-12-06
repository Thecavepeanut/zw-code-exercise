import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Score from './container/Score.jsx';
import Target from './container/Target.jsx';
import { StateManager, Context } from './container/StateManager.jsx';
import WinScreen from './ui/WinScreen.jsx';
//import './home.font';

class HomeSPA extends Component {
    render() {
        return (
            <main>
                <StateManager>
                    <Context.Consumer>
                        {({ state }) =>
                            state.hasWon ? (
                                <WinScreen />
                            ) : (
                                <Fragment>
                                    <p>{'> Hello kitty!'}</p>
                                    <Score />
                                    <Target />
                                </Fragment>
                            )
                        }
                    </Context.Consumer>
                </StateManager>
            </main>
        );
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
