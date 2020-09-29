/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import ST from './index.scss'

class Input extends Component {
  state = {
    value: '',
  }


  onChange = (ev) => {
    const inputValue = ev.target.value
    this.setState({ value: inputValue })
  }


  render() {
    const {
      value, placeholder, max, min, name
    } = this.props

    const inputData = {
      placeholder, value, max, min, name
    }

    return (
      <input
        value={inputData.value}
        className={ST.default}
        placeholder={inputData.placeholder}
        onChange={this.onChange}
        name={inputData.name}
        maxLength={inputData.max}
        minLength={inputData.min}
      />
    )
  }
}

export default Input
