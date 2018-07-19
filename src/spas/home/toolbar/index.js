import React from 'react';
//import classname from 'classame';

export const Toolbar = ({
    points,
    maxPoints,
    misses
}) => {
    return (<div className="toolbar">
            <div>
                {Array(maxPoints - points).fill().map(i =>  <span style={{ opacity: 0.1 }} className="icon icon-beer"/>)}
                {Array(points).fill().map(i => <span className="icon icon-beer"/>)}
            </div>
            <h4>Kitty Clicker</h4>
            <div>
                {Array(misses).fill().map(i => <span className="icon icon-thumbs-up" />)}
            </div>
        </div>);
}

export default Toolbar;