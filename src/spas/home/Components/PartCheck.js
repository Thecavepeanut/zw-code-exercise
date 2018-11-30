import React from 'react'
import CheckboxEmpty from '../icons/checkbox-empty.svg'
import CheckboxChecked from '../icons/checkbox-checked.svg'


const PartCheck = props => (
    <div className="part-check">
        <div>
            {props.count >= 5 ? <CheckboxChecked /> : <CheckboxEmpty /> } Base ({Math.min(5, Math.max(0, props.count))}/5 Rolls)
        </div>
        <div>
            {props.count >= 8 ? <CheckboxChecked /> : <CheckboxEmpty /> } Torso ({Math.max(0, (props.count - 5)) >= 3 ? 3 : Math.max(0, (props.count - 5))}/3 Rolls)
        </div>
        <div>
            {props.count >= 10 ? <CheckboxChecked /> : <CheckboxEmpty /> } Head ({Math.max(0, (props.count - 8)) >= 2 ? 2 : Math.max(0, (props.count - 8))}/2 Rolls)
        </div>
    </div>
)

export default PartCheck