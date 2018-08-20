import React, {Component} from 'react';

const DisplayPlayerName = (props) => {
  let {name = 'New Player'} = props;
  const displayPlayerName = `Hello ${name}`;
  return (
    <div className="displayPlayerName">
      <h1>
        {displayPlayerName}
      </h1>
    </div>
  );
}

export default DisplayPlayerName;
