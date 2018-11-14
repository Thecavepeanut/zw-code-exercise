import React, { Component } from "react";

const BeerScore = ({ score }) => {
    const beerPoints = [];
    if (score !== 10) {
        for (let i = 0; i < score; i++) {
            beerPoints.push(
                <span
                    key={i}
                    className="icon icon-beer"
                    style={{
                        fontSize: "40px",
                        color: `rgb(${Math.floor(
                            Math.random() * 257
                        )}, ${Math.floor(Math.random() * 257)}, ${Math.floor(
                            Math.random() * 257
                        )} )`
                    }}
                />
            );
        }
        return <div>{beerPoints}</div>;
    } else if (score === 10) {
        return (
            <div>
                <h3>You Win!</h3>
            </div>
        );
    }
};

export default BeerScore;
