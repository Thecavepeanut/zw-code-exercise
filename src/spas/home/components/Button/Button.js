import React from 'react'
import './Button.scss';

class Button extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { onClick, label } = this.props;

        return (
            <div className="Button" onClick={onClick}>
                {label}
            </div>
        );
    }
}

export default Button;