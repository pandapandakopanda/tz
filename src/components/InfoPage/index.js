import {STATES} from 'mongoose'
import React from 'react'
import ST from './index.scss'
import Link from 'react-router-dom'


class InfoPage extends React.Component {
  render(){
    return(
      <div>
        Приветики
        <div className={ST.button}><Link to={'/'}>Назад</Link></div>
      </div>
    )
  }
}


export default InfoPage