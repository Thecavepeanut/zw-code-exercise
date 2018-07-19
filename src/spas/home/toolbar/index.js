import React from 'react';

export const Toolbar = ({
    points,
    misses
}) => {
    return (<div className="toolbar">
            <div>
                {Array(points).fill().map(i => <span className="icon icon-beer"/>)}
            </div>
            <div>
                <h4>Kitty Clicker</h4>
            </div>
            <div>
                {Array(misses).fill().map(i => '|')}
            </div>
        </div>);
}

export default Toolbar;