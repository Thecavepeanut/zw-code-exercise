import GithubKitty from '../github.svg'
import React, { Component } from 'react'

export class BouncingCat extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: {
                x: Math.floor(Math.random() * (window.innerWidth)),
                y: Math.floor(Math.random() * (window.innerHeight))
            },
            screen: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            clicked: false
        }
        this.interval = setInterval(() => this.draw(), 1800);
        this.clickingCat = this.clickingCat.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener('resize', this.resize);
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.setState((state, props) => {
            return {
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            };
        });
    }

    draw() {
        let newX = Math.floor(Math.random() * (this.state.screen.width));
        let newY = Math.floor(Math.random() * (this.state.screen.height));

        this.setState((state, props) => {
            return {
                position: {
                    x: newX,
                    y: newY
                }
            };
        });
    }
    
    clickingCat(){
        this.setState(() => {
            return {
                clicked: true
            };
        });

        setTimeout(() => {
            this.setState(() => {
                return {
                    clicked: false
                };
            });
        }, 100);
        
        this.props.onClickingCat();
    }

    render() {
        return (
            <div className="cat-page-wrapper" >
                <div 
                    className={(this.state.clicked) ? "wrap clicked" : "wrap"} 
                    style={{ left: this.state.position.x + "px", top: this.state.position.y + "px" }}
                >
                    <GithubKitty className="cat-icon" onClick={this.clickingCat}/>
                </div>
            </div>
        )
    };
}

export default BouncingCat