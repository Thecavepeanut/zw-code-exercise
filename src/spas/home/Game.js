import React, { Component } from "react";
import GithubKitty from "./github.svg";

// all audio links are public domain
const audioSrc =
  "https://archive.org/download/78_tuxedo-junction_erskine-hawkins--his-orchestra-johnson-dash-hawkins_gbia0012055b/Tuxedo%20Junction%20-%20Erskine%20Hawkins%20%26%20his%20Orchestra.mp3";

const audioSrcSoviet =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg";

export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catClass: "cat-" + props.game,
      howManyBeers: 0
    };
    this.handleCatClick = this.handleCatClick.bind(this);
    this.makeBeers = this.makeBeers.bind(this);
  }

  handleCatClick() {
    const newBeers = this.state.howManyBeers + 1;
    console.log("newBeers ", newBeers);
    if (newBeers === 10) {
      this.setState({ catClass: "cat-spin", howManyBeers: 0 });
      this.props.setGameState("won");
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
    const { game } = this.props;
    const { howManyBeers } = this.state;
    const music = game === "soviet" ? audioSrcSoviet : audioSrc;
    const catBoxStyle = game === "soviet" ? "cat-box-soviet" : "cat-box";
    return (
      <div>
        <audio src={music} autoPlay />
        <span>Number of Beers:</span>
        {this.makeBeers(howManyBeers)}
        <span> just {10 - howManyBeers} to go!</span>
        <div className={catBoxStyle}>
          <div className="cat-horizontal" onClick={this.handleCatClick}>
            <div className="cat-vertical">
              <GithubKitty
                onAnimationEnd={() =>
                  this.setState({ catClass: "cat-" + game })
                }
                className={this.state.catClass}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
