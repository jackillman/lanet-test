import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:UserModel =  new UserModel(1234,4321)
  constructor(private router:Router,private toastr: ToastrService) {}

  // login = 1234;
  // password = 4321;
  isLoggedIn = false;

  submitForm(login,password){
    if(login == this.user.login && password == this.user.password){
      this.isLoggedIn = true;
      this.showSuccess()
      setTimeout(()=>{
        console.log("true")
        this.router.navigate(['admin']);
      },500)
    } else {
      this.isLoggedIn = false;
      console.log("false");
      this.showWrong()
    }
  }

  public isAuthenticated():Boolean {
    if (this.isLoggedIn){ 
      return true;
   } else {
     return false
   }
 }

  showSuccess() {
    this.toastr.success('Correct password');
  }
  showWrong() {
    this.toastr.error('Invalid password');
  }
}
