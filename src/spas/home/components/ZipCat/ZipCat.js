import React from 'react';
import GithubKitty from '../../assets/github.svg';
import './ZipCat.scss';
import CONFIG from '../../Config';
import EVENTS from '../../Events';

const {
    PADDLE_SIZE,
    CAT_SIZE,
    GRAVITY,
    UPDATES_PER_SECOND,
    ROTATION_VELOCITY_DECAY,
    CAT_COLORS
} = CONFIG;

export default class ZipCat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            position: {
                x: 100,
                y: 100
            },
            rotation: 0,
            velocity: {
               x: 2,
               y: -10,
               rotation: 1
            },
            colorIndex: 0,
            isDead: false,
            bounds: props.bounds,
            /** 
             * Caching the paddle position is a moderately shitty way to 
             * do this, however, as per the rules of the assignment, third-party
             * libraries (ie: Redux) are not allowed.
             */
            cachedPaddlePosition: {
                x: 0,
                y: 0
            }
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.updatePhysics();
        }, 1/UPDATES_PER_SECOND*1000);

        setInterval(() => {
            this.changeColor();
        }, 1000);

        const { observer } = window;

        observer.subscribe(EVENTS.PADDLE_MOVED, this.handlePaddleMoved);
        observer.subscribe(EVENTS.WINDOW_RESIZED, this.handleWindowResized);
    }

    handlePaddleMoved = position => {
        this.setState({ 
            cachedPaddlePosition: position
        });
    }

    handleWindowResized = size => {
        const { y } = this.state.position;

        this.setState({
            position: {
                x: size.width / 2 - CAT_SIZE.width / 2,
                y
            }
        });
    }

    applyGravity() {
        const { velocity } = this.state;

        this.setState({
            velocity: {
                ...velocity,
                y: velocity.y + GRAVITY,
            }
        });
    }

    checkForWallCollision() {
        const { x } = this.state.position;
        const { left, right } = this.state.bounds;

        if (x < left) {
            this.bounceOffWall();
        } else if (this.topRightCornerPosition().x > right) {
            this.bounceOffWall();
        }
    }

    bottomLeftCornerPosition() {
        const { x, y } = this.state.position;
        const { height } = CAT_SIZE;

        return {
            x,
            y: y + height
        };
    }

    bottomRightCornerPosition() {
        const { x, y } = this.state.position;
        const { width, height } = CAT_SIZE;

        return {
            x: x + width,
            y: y + height
        };
    }

    topLeftCornerPosition() {
        return this.state.position;
    }

    topRightCornerPosition() {
        const { x, y } = this.state.position;
        const { width } = CAT_SIZE;

        return {
            x: x + width,
            y
        };
    }

    centerPosition() {
        const { x, y } = this.state.position;
        const { width, height } = CAT_SIZE;

        return {
            x: x + (width/2),
            y: y + (height/2)
        }
    }

    checkForDeath() {
        const { bottom } = this.state.bounds;

        if (this.bottomLeftCornerPosition().y + 50 < bottom) {
            return;
        }

        this.die();
    }

    die() {
        this.setState({
            isDead: true
        });

        const { observer } = window;

        observer.publish(EVENTS.PLAYER_DIED);
    }

    checkForPaddleCollision() {
        const { x, y } = this.state.cachedPaddlePosition;

        const leeway = PADDLE_SIZE.height;

        // Return if the cat is above the paddle
        if (this.bottomLeftCornerPosition().y < y - leeway / 2) {
            return;
        }

        // Return if the cat is left of the paddle
        if (this.bottomRightCornerPosition().x < x) {
            return;
        }

        // Return of the cat is right of the paddle
        if (this.bottomLeftCornerPosition().x > x + PADDLE_SIZE.width) {
            return;
        }

        // Return if the cat is below the paddle
        if (this.bottomLeftCornerPosition().y > y + leeway) {
            return;
        }

        this.onPaddleCollision({
            x: this.centerPosition().x - x,
            y: 0
        });
    }
    
    // collisionPosition is relative to the paddle
    onPaddleCollision = (collisionPosition) => {
        const { y } = this.state.velocity;
        // -0.5 to 0.5
        const positionRatio = collisionPosition.x / PADDLE_SIZE.width - 0.5;

        this.setState({
            velocity: {
                x: positionRatio * 20,
                /** 
                 * For some reason, maintaining velocity at 1.0 causes
                 * a slow increase in overall velocity resulting in
                 * the cat bouncing well above the upper bounds of the
                 * viewport. To correct this we retain only 97% of velocity.
                 */
                y: y * -0.97,
                rotation: positionRatio * 20,
            },
        });

        const { observer } = window;

        observer.publish(EVENTS.PLAYER_SCORED);
    }

    changeColor() {
        let { colorIndex } = this.state;

        if (colorIndex >= CAT_COLORS.length) {
            colorIndex = 0;
        } else {
            colorIndex++;
        }

        this.setState({ colorIndex });
    }

    invertYVelocity() {
        const { velocity } = this.state;

        velocity.y = velocity.y * -1;

        this.setState({
            velocity
        });
    }

    invertXVelocity() {
        const { velocity } = this.state;

        velocity.x = velocity.x * -1;

        this.setState({
            velocity
        });
    }

    invertRotationVelocity() {
        const { velocity } = this.state;

        velocity.rotation = velocity.rotation * -1;

        this.setState({
            velocity
        });
    }

    bounceOffWall() {
        this.invertXVelocity();
        this.invertRotationVelocity();
    }

    applyRotationVelocityDecay() {
        const { velocity } = this.state;
        const { rotation } = velocity;

        const newRotation = rotation > 0 
        ? rotation - ROTATION_VELOCITY_DECAY 
        : rotation + ROTATION_VELOCITY_DECAY;

        this.setState({
            velocity: {
                ...velocity,
                rotation: newRotation
            }
        });
    }

    updatePhysics() {
        if (this.state.isDead) {
            return;
        }

        this.applyGravity();
        this.applyRotationVelocityDecay();
        this.checkForDeath();
        this.checkForPaddleCollision();
        this.checkForWallCollision();
        
        const { position, rotation, velocity } = this.state;

        this.setState({
            position: {
                x: position.x + velocity.x,
                y: position.y + velocity.y
            },
            rotation: rotation + velocity.rotation
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bounds: nextProps.bounds
        });
    }
   
    render() {
        const { position, rotation, isDead, colorIndex } = this.state;
        const { width, height } = CAT_SIZE;
        const transform = `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`;
        const transformOrigin = `${width/2}px ${height/2}px`;
        const fill = isDead ? 'red' : CAT_COLORS[colorIndex];

        return(
            <div 
                className="ZipCat"
                onClick={this.onClick}
                style={{transform, transformOrigin}}>

                <GithubKitty style={{ fill }} />
            </div>
        )
    }
}