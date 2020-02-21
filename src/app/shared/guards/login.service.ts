import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAutenticado : boolean = false;

  constructor() { }

  isUsuarioAutenticado () {
    return this.isAutenticado;
  }


  setIsAutenticado(value){
    this.isAutenticado = value;
  }
}
