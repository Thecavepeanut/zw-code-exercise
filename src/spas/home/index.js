import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Shot from './sounds/shotgun.mp3';
import Rifle from './rifle.svg';
import Duck from './duck.svg';
import './home.font';
import Artwork from './artwork'

const root = document.documentElement;
const MAX_SCORE = 10;

class HomeSPA extends Component {
  constructor () {
    super();
    this.audio = new Audio(Shot);
    this.state = {
      hits: 0,
      duckHit: false
    };
  }

  /**
   * Update rifle angle based on cursor coordinates
   * @param {Event} e
   */
  static updateRifleAngle (e) {
    const rad = Math.atan2(e.clientY, e.clientX);
    const angle = (rad * (180 / Math.PI) * -1);
    root.style.setProperty(`--angle`, `${angle}deg`);
  }
  render () {
    return (
      <main>
        {this.state.hits < MAX_SCORE && (
          <header>
            <h2>Score:</h2>
            {[...Array(this.state.hits).keys()].map(el => (
              <Duck key={el}/>))
            }
          </header>
        )}
        {this.state.hits < MAX_SCORE ? (
          <article onMouseMove={HomeSPA.updateRifleAngle}
                   onClick={this.shoot.bind(this)}>
            <Duck className={this.state.duckHit ? 'falling' : 'flying'}
                  onClick={this.hitDuck.bind(this)}/>
          </article>
        ) : (
          <article>
            <h1>You won!!!</h1>
            <button onClick={this.resetState.bind(this)}>Play again</button>
          </article>
        )}

        {this.state.hits < MAX_SCORE && (
          <footer><Rifle/></footer>
        )}
        <Artwork />
      </main>
    );
  }

  /**
   * Play shooting sound.
   * @param {Event} e
   */
  shoot (e) {
    this.audio.play();
  }

  /**
   * Update hits state and start falling animation
   * @param {Event} e
   */
  hitDuck (e) {
    root.style.setProperty(`--falling-top`, `${e.clientY}px`);
    root.style.setProperty(`--falling-left`, `${e.clientX}px`);
    this.setState({
      duckHit: true,
      hits: this.state.hits + 1,
    });
    setTimeout(this.setState.bind(this), 2500, {
      duckHit: false
    });
  }

  /**
   * Reset state to default
   */
  resetState () {
    this.setState({
      duckHit: false,
      hits: 0,
    });
  }
}

ReactDOM.render(<HomeSPA/>, document.getElementById('react-spa'));
