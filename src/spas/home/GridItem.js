import React, { Component } from "react";
import Kitty from "./icons/kitty.svg";
import Chameleon from "./icons/chameleon.svg";
import Penguin from "./icons/penguin.svg";
import Cow from "./icons/cow.svg";

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
  render() {
    const style = this.state.fadeIn ? "fading" : "solid";
    if (this.props.data.icon === 0) {
      return <Chameleon className={style} />;
    }
    if (this.props.data.icon === 1) {
      return <Cow className={style} />;
    }
    if (this.props.data.icon === 2) {
      return <Penguin className={style} />;
    }
    if (this.props.data.icon === 3) {
      return <Kitty onClick={this.props.onClick} className={style} />;
    }
    return <div />;
  }
}
export default GridItem;
