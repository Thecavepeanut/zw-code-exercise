import React, { Component } from "react";
import GridItem from "./GridItem";

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const h = this.props.data.backgroundColor.hue;
    const s = this.props.data.backgroundColor.saturation;
    const l = this.props.data.backgroundColor.lightness;
    return (
      <div id="gameContainer">
        {this.props.data.count < 10 ? (
          <div
            id="grid"
            style={{
              backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
              transition: "background-color 0.5s ease"
            }}
          >
            {this.props.data.iconArray.map((item, index) => {
              return (
                <GridItem
                  key={index}
                  data={item}
                  onClick={() => {
                    this.props.onClick();
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div id="winScreen">
            <h1>WINNER!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Grid;
