import React, { Component } from "react";
import "./styles.scss";
import BeerPoints from "./Points";
import GridItem from "./GridItem";
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
  clickKitty(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
    this.loadArrayData();
  }
  componentWillMount() {
    this.loadArrayData();
  }
  componentDidMount() {
    const time = 2000 - this.state.count * 250;
    this.timer = setInterval(() => {
      this.loadArrayData();
      this.setBackgroundColor();
    }, 1250);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  setIcon(element) {
    let randIcon = Math.floor(Math.random() * 3);
    //different random number for direction
    let randDir = Math.floor(Math.random() * 3);
    const data = {
      id: element,
      icon: randIcon,
      direction: randDir
    };
    return data;
  }

  loadArrayData() {
    let array = [];
    for (let i = 0; i < 140; i++) {
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

  setBackgroundColor() {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 70) + 25;
    let l = Math.floor(Math.random() * 40) + 45;

    //if hue is too similar to last, reroll the random number
    //low probability it will be close again, but not worth the loop for this project
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

  addCatData() {
    //replace a random icon with a new cat icon
    let randIndex = Math.floor(Math.random() * 139);
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
    const h = this.state.backgroundColor.hue;
    const s = this.state.backgroundColor.saturation;
    const l = this.state.backgroundColor.lightness;
    return (
      <div id="mainContainer">
        <div id="headerContainer">
          <h1>Welcome to the Clickin' Kitten!</h1>
          <div id="scoreContainer">
            <h2>Score:</h2>
            {this.state.count > 0 ? (
              <BeerPoints count={this.state.count} />
            ) : (
              <div />
            )}
          </div>
        </div>

        <div id="gameContainer">
          {this.state.count < 10 ? (
            <div
              id="grid"
              style={{
                backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
                transition: "background-color 0.5s ease"
              }}
            >
              {this.state.iconArray.map((item, index) => {
                return (
                  <GridItem key={index} data={item} onClick={this.clickKitty} />
                );
              })}
            </div>
          ) : (
            <div id="winScreen">
              <h1>WINNER!</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HomeSPA;
