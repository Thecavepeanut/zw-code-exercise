import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './scenes/Home/Home';
import Play from './scenes/Play/Play'
import './styles.scss'
import './home.font'
import Observer from './Observer';
import EVENTS from './Events';

window.observer = new Observer();

const SCENES = {
    HOME: 'HOME',
    PLAY: 'PLAY'
};

class ZipWhipGame extends Component {
    constructor() {
        super();

        this.state = {
            scene: SCENES.HOME,
            /** 
             * sceneId exists so that we can effectively reset a 
             * scene (eg: PLAY) by simply changing the key.
             */
            sceneId: 0, 
        };

        observer.subscribe(EVENTS.PLAY_CLICKED, this.handlePlayClicked);
        observer.subscribe(EVENTS.HOME_CLICKED, this.handleHomeClicked);
    }

    handlePlayClicked = () => {
        const { sceneId } = this.state;

        this.setState({
            scene: SCENES.PLAY,
            sceneId: sceneId + 1
        });
    }

    handleHomeClicked = () => {
        const { sceneId } = this.state;

        this.setState({ 
            scene: SCENES.HOME,
            sceneId: sceneId + 1
        });
    }

    render() {
        const { scene, sceneId } = this.state;

        switch(scene) {
            case SCENES.HOME:
                return <Home key={ sceneId } />;
            case SCENES.PLAY:
                return <Play key={ sceneId } />;
        }
    }
}

ReactDOM.render(<ZipWhipGame />, document.getElementById('react-spa'))