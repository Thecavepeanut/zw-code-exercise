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
      kittenPosition: null
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
    this.timer = setInterval(() => {
      this.updateIcon();
    }, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  setIcon(element) {
    let randInt = Math.floor(Math.random() * 3);
    const data = {
      id: element,
      icon: randInt
    };
    return data;
  }
  async updateIcon() {
    let randElement = Math.floor(Math.random() * 139);
    if (randElement !== this.state.kittenPosition) {
      const data = this.setIcon(randElement);
      this.state.iconArray.splice(randElement, 1, data);
      this.setState({ iconArray: this.state.iconArray });
    }
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
    return (
      <div id="mainContainer">
        <div id="headerContainer">
          <p>Welcome to the Clickin' Kitten!</p>
          <div id="score">
            <p>Score:</p>
            {this.state.count > 0 ? (
              <BeerPoints count={this.state.count} />
            ) : (
              <div />
            )}
          </div>
        </div>

        <div id="gameContainer">
          {this.state.count < 10 ? (
            <div id="grid">
              {this.state.iconArray.map((item, index) => {
                // console.log(
                //   "stuff at index: " + index + "data is " + JSON.stringify(item)
                // );
                return (
                  <GridItem key={index} data={item} onClick={this.clickKitty} />
                );
              })}
            </div>
          ) : (
            <div id="winScreen">
              <p>WINNER!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HomeSPA;
