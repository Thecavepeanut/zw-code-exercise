import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'
//import $ from 'jquery';


class GameTarget extends Component {

  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
    this.hit = this.hit.bind(this);
  }

  hit() {
    if (this.props.hitHandler) {
      this.props.hitHandler();
    }
  }

  componentDidMount() {
    var self = this;
    self.move();
  }

  makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = window.innerHeight - 100;  
    var w = window.innerWidth - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  move() {
    var newq = this.makeNewPosition();
    var self = this;

    if (this.props.playing) {
      
      document.getElementById("kitty").style.top = newq[0];
      document.getElementById("kitty").style.left = newq[1];
      setTimeout(() => {
        self.move();
      }, 1000
      );
    }

  };


  render() {
    return (
      <GithubKitty onClick={this.hit} id="kitty"/>

    )

  }

}

export default GameTarget;