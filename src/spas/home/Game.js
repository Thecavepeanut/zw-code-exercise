import React, { Component } from "react";
import GithubKitty from "./github.svg";

const audioSrc =
  "https://archive.org/download/78_tuxedo-junction_erskine-hawkins--his-orchestra-johnson-dash-hawkins_gbia0012055b/Tuxedo%20Junction%20-%20Erskine%20Hawkins%20%26%20his%20Orchestra.mp3";

export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catClass: "cat",
      howManyBeers: 0,
      game: "stopped"
    };
    this.handleCatClick = this.handleCatClick.bind(this);
    this.makeBeers = this.makeBeers.bind(this);
  }

  handleCatClick() {
    const newBeers = this.state.howManyBeers + 1;
    console.log("newBeers ", newBeers);
    if (newBeers === 10) {
      this.setState({ catClass: "cat-spin", howManyBeers: 0, game: "won" });
    } else {
      this.setState({ catClass: "cat-spin", howManyBeers: newBeers });
    }
  }

  makeBeers(score) {
    // [...Array(score).keys()] generates an array with a range of 1 to score
    return [...Array(score).keys()].map(element => (
      <span className="icon icon-beer beer-styles" key={element} />
    ));
  }

  render() {
    return (
      <div>
        <audio> </audio>
        <span className="beer-styles">Number of Beers: </span>
        {this.makeBeers(this.state.howManyBeers)}
        <div className="cat-box">
          <div className="cat-horizontal" onClick={this.handleCatClick}>
            <div className="cat-vertical">
              <GithubKitty
                onAnimationEnd={() => this.setState({ catClass: "cat" })}
                className={this.state.catClass}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
