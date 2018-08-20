import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ClickGame from './ClickGame.js';

class HomeSPA extends Component {
    render(){
        return (
          <ClickGame winScore="10"/>
        );
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
