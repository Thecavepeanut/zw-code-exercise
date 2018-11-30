import React, { Component } from "react";
import "./styles.scss";
import Kitty from "./icons/kitty.svg";
import Chameleon from "./icons/chameleon.svg";
import Penguin from "./icons/penguin.svg";
import Cow from "./icons/cow.svg";
import BeerPoints from "./Points";
import "./home.font";

class HomeSPA extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, iconArray: [], lastCatPosition: null };
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

  loadArrayData() {
    const data = [];
    for (let i = 0; i < 140; i++) {
      let randInt = Math.floor(Math.random() * 3);
      data.push(randInt);
    }
    this.setState({ iconArray: data }, () => {
      this.addCatData();
    });
  }
  addCatData() {
    if (this.state.lastCatPosition === null) {
      let randIndex = Math.floor(Math.random() * 139);
      //add one number for kitten icon
      this.state.iconArray.splice(randIndex, 1, 3);
      this.setState({ lastCatPosition: randIndex });
    } else {
      let randInt = Math.floor(Math.random() * 3);
      this.state.iconArray.splice(this.state.lastCatPosition, 1, randInt);

      let randIndex = Math.floor(Math.random() * 139);
      //add one number for kitten icon
      this.state.iconArray.splice(randIndex, 1, 3);
      this.setState({ lastCatPosition: randIndex });
    }
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="headerContainer">
          <p>Welcome to the game!</p>

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
                if (item === 0) {
                  return <Chameleon key={index} />;
                }
                if (item === 1) {
                  return <Cow key={index} />;
                }
                if (item === 2) {
                  return <Penguin key={index} />;
                }
                if (item === 3) {
                  return <Kitty key={index} onClick={this.clickKitty} />;
                }
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
