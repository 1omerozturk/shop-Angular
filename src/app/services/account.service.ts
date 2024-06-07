import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  loggedIn: boolean = false;
  login(user: User): boolean {
    if (user.userName == 'omer' && user.password == '12345') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      return true;
    }
    return false;
  }
  isLoggedIn() {
    if(localStorage.getItem("isLogged")){

      this.loggedIn=true;
      return this.loggedIn;
    }
    else{
      this.loggedIn=false;
    return this.loggedIn;
    }
  }
  logOut() {
    localStorage.removeItem('isLogged');
    localStorage.clear();
    this.loggedIn = false;
  }
}
