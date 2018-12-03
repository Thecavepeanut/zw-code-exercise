import React, { Component } from "react";
import "./styles.scss";
import Points from "./components/Points";
import Grid from "./components/Grid";
import "./home.font";

class HomeSPA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      iconArray: [],
      lastKittenPosition: null,
      kittenPosition: null,
      backgroundColor: { hue: null, saturation: null, lightness: null }
    };
    this.clickKitty = this.clickKitty.bind(this);
  }

  componentWillMount() {
    this.loadArrayData();
  }
  componentDidMount() {
    const time = 2500 - this.state.count * 200;
    this.timer = setInterval(() => {
      this.loadArrayData();
    }, time);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  clickKitty() {
    const time = 2500 - this.state.count * 200;
    //keep interval from jumping after a click
    clearInterval(this.timer);
    this.setState({ count: this.state.count + 1 });
    this.loadArrayData();
    this.timer = setInterval(() => {
      this.loadArrayData();
    }, time);
  }

  setIcon(element) {
    let randIcon = Math.floor(Math.random() * 3);
    let randDir = Math.floor(Math.random() * 3);
    const data = {
      id: element,
      icon: randIcon,
      direction: randDir
    };
    return data;
  }
  //used to set up the new order of the grid
  loadArrayData() {
    this.setBackgroundColor();
    let array = [];
    for (let i = 0; i < 100; i++) {
      array.push(this.setIcon(i));
    }
    this.setState(
      {
        iconArray: array
      },
      () => {
        this.addCatData();
      }
    );
  }
  //set grid color
  setBackgroundColor() {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 70) + 25;
    let l = Math.floor(Math.random() * 40) + 45;

    //if hue is too similar to last, reroll the random number
    if (
      h > this.state.backgroundColor.hue - 10 &&
      h < this.state.backgroundColor.hue + 10
    ) {
      h = Math.floor(Math.random() * 360);
    }

    this.setState({
      backgroundColor: {
        hue: h,
        saturation: s,
        lightness: l
      }
    });
  }
  //replace a random icon with a new cat icon
  addCatData() {
    let randIndex = Math.floor(Math.random() * 99);
    this.setState({ kittenPosition: randIndex });
    this.state.iconArray.splice(randIndex, 1, {
      id: randIndex,
      icon: 3
    });
    let current = this.state.lastKittenPosition;
    if (current !== null) {
      //replace current cat icon with a non-cat icon
      this.state.iconArray.splice(current, 1, this.setIcon(current));
    } else {
      this.setState({ lastKittenPosition: randIndex });
    }
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="headerContainer">
          <h1>Welcome to Clickin' Kitten!</h1>
          <p>(click the kitten)</p>
          <Points count={this.state.count} />
        </div>
        <Grid data={this.state} onClick={this.clickKitty} />
      </div>
    );
  }
}

export default HomeSPA;
