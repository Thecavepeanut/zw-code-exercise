import React, { PureComponent } from 'react'


export default class Score extends PureComponent {
    render() {
        const {clicks} = this.props;
        const icons = [];
        for(let i=0; i<10; i++)
            icons.push(
            <span key={i} 
                className={ i < clicks 
                    ? "icon icon-beer icon-point" 
                    : "icon icon-beer"
                }
            />);
        
        return (
            <div className="game-stats">
                <div> {icons} </div>
            </div>
        )
    }
}
