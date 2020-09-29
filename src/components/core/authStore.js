import { action, observable } from 'mobx'

class Auth  {
   @observable isAuthorized = false

   user = {
    login:'admin',
    password:'admin'
   }
   
   compare = (login, password) =>  this.user.login === login && this.user.password === password

   @action setAuth = ( value ) => {
    this.isAuthorized = value
   }
}




const auth = new Auth
export default auth