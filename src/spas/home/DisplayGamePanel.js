import React, {Component} from 'react';
import './styles.scss';
import GithubKitty from './github.svg';
import './home.font';

class DisplayGamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {style: {},
                  x: 0,
                  y: 0,
                  kittyClass: 'rotate-clockwise'};
    this.handleKittyClick = this.handleKittyClick.bind(this);
    this.move = this.move.bind(this);
  }

  handleKittyClick() {
    this.props.onAddScore();
  }

  getTransitionTime(num) {
    return Math.floor(num / 300) + 1;
  }

  getRandomValue(num) {
    return Math.floor(Math.random() * num);
  }

  move() {
    let {x, y, kittyClass} = this.state;
    const {innerWidth, innerHeight} = window;

    /*
      Calculate random translations for svg.  Use random coin flip to bounce
      between left/right and top/down margins.
    */
    if (Math.floor(Math.random() * 2)) {
      x = x < (innerWidth / 2) ? innerWidth - 100 : 0;
      y = this.getRandomValue(innerHeight - 200);

    } else{
      x = this.getRandomValue(innerWidth - 100);
      y = y < (innerHeight / 2) ? innerHeight - 200 : 0;
    }

    /*
      Calculate transition time based on width/height, whichever is greater.
      Even out image speed and timeout setting for responsive screen sizes.
    */
    let transitionTime = this.getTransitionTime(innerWidth);
    if (innerWidth < innerHeight) {
      transitionTime = this.getTransitionTime(innerHeight);
    }

    const style = {
      transition: `${transitionTime}s linear`,
      transform: `translate(${x}px, ${y}px)`
    };

    kittyClass = kittyClass === 'rotate-clockwise'? 'rotate-counter-clockwise' : 'rotate-clockwise';

    this.setState({style, x, y, kittyClass});
    this.timerId = setTimeout(this.move, transitionTime * 1000);
  }

  componentDidMount() {
    this.timerId = setTimeout(this.move, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { kittyClass, style } = this.state;
    return (
      <div className="game-panel">
        <div style={style}>
          <GithubKitty id="github-kitty" className={kittyClass} onClick={this.handleKittyClick}/>
        </div>
      </div>
    )
  }
}

export default DisplayGamePanel;
