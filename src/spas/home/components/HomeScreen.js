import React from 'react'

export default function HomeScreen({switchScreens}) {
    return (
        <div className="screen welcome-screen">
            <div className="screen-title"> DEBUG </div>

            <button 
                className="screen-btn"
                onClick={() => switchScreens('Rules')}>
                Play
            </button>
        </div>
    )
}
