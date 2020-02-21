import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private loginservice :  LoginService,
    private router : Router ) { }
  
  
  canActivate() {
    if (this.loginservice.isUsuarioAutenticado() == false){
      this.router.navigate (['/home']);
    }
    return true;
  }
  

}

