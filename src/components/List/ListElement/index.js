import React, {Component} from 'react'
import ST from './index.scss'



class ListElement extends Component {
  render() {
    const { text, imgSrc, name } = this.props
    return(
      <div className={ST.container}>
        <img src={imgSrc} alt="Some img here"/>
        <div className={ST.data}>
          <p id={ST.name}>{name}</p>
          <p id={ST.text}>{text}</p>
        </div>

      </div>
    )
  }
}


export default ListElement