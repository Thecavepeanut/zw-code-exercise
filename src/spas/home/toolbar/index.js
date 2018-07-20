import React from 'react';
//import classname from 'classame';

export const Toolbar = ({
    points,
    maxPoints,
    misses,
    maxMisses
}) => {
    return (<header className="toolbar">
            <div>
                {Array(points).fill().map((_, i) => <span key={i + 'beer'} className="icon icon-beer"/>)}
                {Array(maxPoints - points).fill().map((_, i) =>  <span key={i + 'beerd'} className="icon icond icon-beer"/>)}
            </div>
            <h4>Kitty Clicker</h4>
            <div>
                {Array(maxMisses - misses).fill().map((_, i) => <span key={i + 'lb'} className="icon icon-light-bulb" />)}
                {Array(misses).fill().map((_, i) => <span key={i + 'lbd'} className="icon icond icon-light-bulb" />)}
            </div>
        </header>);
}

export default Toolbar;