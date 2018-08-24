import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private authService:AuthService){}
  canActivate() {
      console.log(this.authService.isLoggedIn)
      if(this.authService.isAuthenticated){
       
        return true;
      }
      // if (!this.authService.isAuthenticated()) { 
      //   this.router.navigate(['admin']);
      //   return false;
      // }
      this.router.navigate(['/']);
    return false;
  }
}
