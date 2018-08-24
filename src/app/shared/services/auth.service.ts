import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login = 1234;
  password = 4321;
  isLoggedIn = false;
  submitForm(login,password){
    console.log(login);
    console.log(password)
    if(login == this.login && password == this.password){
      console.log("true");
      this.isLoggedIn = true;
      this.router.navigate(['admin']);
    } else {
      console.log("false")
    }
  }

  public isAuthenticated():Boolean {
    if (this.isLoggedIn){
      console.log(this.isLoggedIn)
      
      return true;
   } else {
     return false
   }
 }
}
