import React, {Component} from 'react'
import ST from './index.scss'
import auth  from '../core/authStore'
import MainList from '../List/MainList'
import Auth from '../Auth'
import { observer } from 'mobx-react'


@observer
class Index extends Component {
  render(){
    return(
      <div>
        {auth.isAuthorized === false || auth.isAuthorized === null ? <Auth /> : <MainList />}
      </div>
    )
  }
}

export default Index