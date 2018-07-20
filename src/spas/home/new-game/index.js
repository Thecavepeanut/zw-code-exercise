import React from 'react';
import GithubKitty from '../github.svg';
const NewGame = ({
    clicked
}) => {
    return <div className='card' >
            <h1>Kitty Clicker</h1>
            <div className="preview" >
                <GithubKitty className='smallSvg' />
            </div>
            <span>Click the kitty 10 times</span>
            <button onClick={clicked} >Start</button>
        </div>
}

export default NewGame;