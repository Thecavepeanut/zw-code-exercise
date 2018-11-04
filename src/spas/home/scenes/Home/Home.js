import React from 'react'
import Button from '../../components/Button/Button';
import './Home.scss';
import GithubKitty from '../../assets/github.svg';
import EVENTS from '../../Events';

export default class Home extends React.Component {

    handlePlayClicked() {
        const { observer } = window;
        observer.publish(EVENTS.PLAY_CLICKED)
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="Home">
                <h1>
                    <GithubKitty /> ZipCat
                </h1>
                <div className="buttons">
                    <Button label="Play" onClick={this.handlePlayClicked} />
                </div>
            </div>
        );
    }
}