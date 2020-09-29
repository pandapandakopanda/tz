import React, {Component} from'react'
import ST from './index.scss'
import ListElement from '../ListElement'
import InfoPage from '../../InfoPage'
import {getRepo} from '../../core/store'
import {graphql} from 'react-apollo'
import auth from '../../core/authStore'
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  Link
} from "react-router-dom"

const data = getRepo()

class MainList extends Component {
  
  onClickHandle = () => auth.setAuth(false)
  
  render() {
    const history = this.props

    const components = this.props.data.loading  
    ? null
    : this.props.data.search.edges.map (data => {
      const link = <Link to={'/info'}>{data.node.description}</Link>
      return <ListElement 
              key={data.node.id}
              name={data.node.name}
              text={link}
            />
    })
    
  const list = () => {
    return <div className={ST.list}>
              <h1>Тестовое задание</h1>
              {components}
              <div className={ST.button} onClick={this.onClickHandle}>Выйти</div>
            </div>
  }

    return(
        <Switch>
            <Route history={history} path='/info' component={InfoPage} />
            <Route history={history} path='/' component={list}/>
        </Switch>
    )
  }
}

const ListWithData = graphql(
  data,
  {
    options:{
      variables:{
        name:'tuts'
      }
    }
  }
)(MainList)


export default withRouter(ListWithData) 