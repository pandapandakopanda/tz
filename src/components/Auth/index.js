import {STATES} from 'mongoose';
import React from 'react'
import auth from '../core/authStore'
import ST from './index.scss'
import Input from '../Input'


class Auth extends React.Component {

  onClickHandler = () =>{
    const login = this.getLogin()
    const password = this.getPassword()
    const isAuthorized = auth.compare(login, password)
    auth.setAuth(isAuthorized)
  }

  getLogin =()=>  document.getElementsByTagName('input')['login'].value

  getPassword = ()=> document.getElementsByTagName('input')['password'].value

  render(){
    return(
      <div className={ST.wrapper}>
      <div className={ST.container}>
        <div className={ST.login}>
            Login: 
            <Input name='login' placeholder='Login' value='admin'/>
        </div>

        <div className={ST.password}>
           Password: 
            <Input name='password' placeholder='Password' value='admin'/>
        </div>

        <div 
          className={ST.button}
          onClick={this.onClickHandler}
        >
          Войти
        </div>
      </div>
      </div>
    )
  }
}


export default Auth