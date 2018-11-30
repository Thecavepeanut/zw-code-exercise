import React from 'react'
import PartCheck from './PartCheck'

const Counter = props => (
    <div className="counter">
        <div className="message">{props.count >= 10 ? 'You made a snowman!' : (props.count >= 1 ? 'Keep rolling that snowball!' : 'Click the snowball to roll on more snow!')}</div>
        <PartCheck count={props.count} />
    </div>
)

export default Counter