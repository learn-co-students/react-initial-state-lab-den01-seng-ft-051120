import { Component } from "react";

// your Bomb code here!
export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if(this.state.secondsLeft) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return "Boom!"
        }
    }

}