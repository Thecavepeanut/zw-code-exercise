import React, { Component } from "react";
import Kitty from "./icons/kitty.svg";
import Chameleon from "./icons/chameleon.svg";
import Penguin from "./icons/penguin.svg";
import Cow from "./icons/cow.svg";
import "./styles.scss";

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true
    };
  }
  componentDidMount() {
    this.fade = setTimeout(this.setState({ fadeIn: false }), 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.fade);
  }

  svgRotation() {
    const direction = this.props.data.direction;
    if (direction === 0) {
      return "svgDown";
    }
    if (direction === 1) {
      return "svgRight";
    }
    if (direction === 2) {
      return "svgUp";
    }
    if (direction === 3) {
      return "svgLeft";
    }
  }
  render() {
    if (this.props.data.icon === 0) {
      return <Chameleon className={this.svgRotation()} />;
    }
    if (this.props.data.icon === 1) {
      return <Cow className={this.svgRotation()} />;
    }
    if (this.props.data.icon === 2) {
      return <Penguin className={this.svgRotation()} />;
    }
    if (this.props.data.icon === 3) {
      return (
        <Kitty onClick={this.props.onClick} className={this.svgRotation()} />
      );
    }
    return <div />;
  }
}
export default GridItem;
