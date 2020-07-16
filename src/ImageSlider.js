import React, { Component } from 'react'

const initialSlideIndex = {
  currentSlideIndex: 0,
}

export default class ImageSlider extends Component {

  state = initialSlideIndex

  render() {
    return(
      <React.Fragment>
        <input type='range' min='0' max='10' value={this.state.currentSlideIndex} />
        <label>I am on slide {this.state.currentSlideIndex}</label>
      </React.Fragment>
    )
  }
}