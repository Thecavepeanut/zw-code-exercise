import React from 'react'

import Js from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import Cpp from '../assets/c.svg'

export default function AvatarScreen({switchScreens}) {
    return (
      <div className="screen player-screen">
            <h1 className="screen-title"> Choose a Language </h1>
            <div className="players">
                <div
                    className="player"
                    onClick={() => switchScreens('Game', {playerName: 'Python'})}
                    >
                    <Python />
                    <p> Python </p>
                </div>
            
                <div 
                    className="player"
                    onClick={() => switchScreens('Game', {playerName: 'C++'})}
                    >
                    <Cpp />
                    <p> C++ </p>
                </div>

                <div 
                    className="player"
                    onClick={() => switchScreens('Game', {playerName: 'Js'})}
                    >
                    <Js />
                    <p> Javascript </p>
                </div>

            </div>

      </div>
    )
  }
