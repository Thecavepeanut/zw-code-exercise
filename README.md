# zw-code-exercise
ZW Code Exercise - React Game

## Setup
* Using node version 8.9.1 run `npm install`
* Run `npm start`
* Next navigate to `http://localhost:8080`

## Setup includes flow package.
After npm -i you should have flow installed.
Run npx flow to start the flow server


## Building for prod
* Run `npm run build`

Note: If you do this you need to run `npm run clear` before starting dev mode. Webpack dev server resolves compiled files first instead of virtual files. So you have to clear that stuff out or you wont see your changes in dev mode.


## Objective
![example](https://i.gyazo.com/0da250886a33734abb0b41f22e29c1b3.gif)

You will be making a game in React. Feel free to be creative. We have provided an SVG example and an icon, but you may use whatever you like. Click on a target to get a point. After 10 successful clicks, the player wins.

### Requirements
* Fork this repo and submit a PR when done
* No external libs
* Put code in `/src/spas/home`
* Must use SVG asset for click target
* You may use `scss` or `css`
* Must be responsive and mobile friendly
* Shoud work in all modern web browsers
* Must have a winner UI
