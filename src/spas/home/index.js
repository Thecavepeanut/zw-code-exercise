import React, {Component} from 'react'
import './styles.scss'
import GithubKitty from './github.svg'
import Score from './Score'
import './home.font'

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            colors: 'rgb(33, 22, 198)'
        }
        this.clicked = this.clicked.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
    }

    clicked() {
        const { score } = this.state;
        this.setState({ score: score + 1 });
    }

    changeColorHandler() {
        let { colors } = this.state;
        colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        this.setState({colors: colors})
    }

    render() {
        const { score, colors } = this.state;
        if (this.state.score < 10) {
            return (
                <div
                    className="game-container"
                    onMouseUp={this.classesChangeHangler}
                    onMouseMove={this.changeColorHandler}
                    style={{height: "100vw", width: "100vw"}}
                >
                    <GithubKitty />
                    <Score score={score} colors={colors} />
                    {/* <span className="icon icon-beer" /> */}
                    <GithubKitty
                        onClick={this.clicked}
                        fill={this.state.colors}
                        className="svg"
                    />
                </div>
            )
        } else {
            return (
                <div
                    className="win-screen"
                    style={{ height: '100vh', width: '100vw' }}
                    onMouseMove={this.changeColorHandler}
                >
                    <GithubKitty />
                    <Score score={score} colors={colors} />    
                    <h1>You Win</h1>
                </div>
            )
        }
    }
}

export default HomeSPA;
// ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))