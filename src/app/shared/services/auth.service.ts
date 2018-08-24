import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private toastr: ToastrService) { }

  login = 1234;
  password = 4321;
  isLoggedIn = false;

  submitForm(login,password){
    if(login == this.login && password == this.password){
      this.isLoggedIn = true;
      this.showSuccess()
      setTimeout(()=>{
        console.log("true")
        this.router.navigate(['admin']);
      },500)
    } else {
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
    this.toastr.success('Valid password');
  }
  showWrong() {
    this.toastr.error('Invalid password');
  }
}
