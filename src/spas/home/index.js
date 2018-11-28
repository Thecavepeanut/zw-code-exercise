import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import GithubKitty from "./github.svg";
import BeerPoints from "./Points";
import Beer from "./icons/beer.svg";
import "./home.font";

class HomeSPA extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.clickCat = this.clickCat.bind(this);
  }
  clickCat(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div id="mainContainer">
        <p>Welcome to the game!</p>
        <GithubKitty onClick={this.clickCat} />
        {this.state.count > 0 ? (
          <BeerPoints count={this.state.count} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default HomeSPA;
