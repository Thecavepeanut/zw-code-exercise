import React from 'react'
import CheckboxEmpty from '../icons/checkbox-empty.svg'
import CheckboxChecked from '../icons/checkbox-checked.svg'


const PartCheck = props => (
    <div className="part-check">
        <div>
            {props.count >= 5 ? <CheckboxChecked /> : <CheckboxEmpty /> } Base
        </div>
        <div>
            {props.count >= 8 ? <CheckboxChecked /> : <CheckboxEmpty /> } Torso
        </div>
        <div>
            {props.count >= 10 ? <CheckboxChecked /> : <CheckboxEmpty /> } Head
        </div>
    </div>
)

export default PartCheck