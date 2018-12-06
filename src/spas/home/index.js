import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Score from './ui/Score/Score.jsx';
import Target from './ui/Target/Target.jsx';
//import './home.font';

class HomeSPA extends Component {
    render(){
        return (
            <div>
                <Score />
                <Target />
            </div>
        );
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));