import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.api + "usuarios/";

  isAutenticado : boolean = false;

  constructor(private http : HttpClient) { }

  isUsuarioAutenticado () {
    return this.isAutenticado;
  }


  setIsAutenticado(value){
    this.isAutenticado = value;
  }

  
login (obj){
  return this.http.post (this.url + "auth/", obj);
}

}
