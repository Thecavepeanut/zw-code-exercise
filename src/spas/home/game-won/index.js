import React from 'react';
import GithubKitty from '../github.svg';
const NewGame = ({
    clicked
}) => {
    return <div className='card' >
            <h1>You Win!</h1>
            <div className="bounce" >
                <GithubKitty className='smallSvg' />
            </div>
            <button onClick={clicked} >Play Again</button>
        </div>
}

export default NewGame;