import React from 'react'

export default function RulesScreen({switchScreens}) {
    return (
        <div className="screen">
            <h1 className="screen-title"> Rules of the Game </h1>
            <ul className="rules-list">
                <li> Click on the Github Octocat 10 times to win </li>
                <li> Everytime you miss the Octocat, 1 point is deducted. </li>
                <li>If you get bellow 0 point then you loose. </li>
            </ul>

            <button 
                className="screen-btn"
                onClick={() => switchScreens('Avatar')}>
                continue
            </button>
        </div>
    )
}
