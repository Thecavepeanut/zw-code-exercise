import React from 'react';
import GithubKitty from '../github.svg';
const NewGame = ({
    clicked
}) => {
    return <div className='card' >
            <h1>Game Over!</h1>
            <div className="dead" >
                <GithubKitty className='smallSvg' />
            </div>
            <span>You ran out of tries</span>
            <button onClick={clicked} >Try Again!</button>
        </div>
}

export default NewGame;