// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {

    constructor(props){
        super()
        this.state ={
            secondsLeft: props.initialCount
        }
    }
    render(){
    return (
        <h2>
            {this.state.secondsLeft == 0 
                ? <h2>Boom!</h2>
                : <p>{`${this.state.secondsLeft} seconds left before I go boom!`}</p>
            }
        </h2>
        )
            
        
    }
}