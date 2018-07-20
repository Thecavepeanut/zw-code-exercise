import React from 'react';
import GithubKitty from '../github.svg';
const NewGame = ({
    clicked
}) => {
    return <div className='card' >
            <h1>You Win!</h1>
            <div className="dead" >
                <GithubKitty className='smallSvg' />
            </div>
            <button onClick={clicked} >Start</button>
        </div>
}

export default NewGame;