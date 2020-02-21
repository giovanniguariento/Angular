import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAutenticado: boolean = false;

  constructor(private http: HttpClient) { }

  isUsuarioAutenticado() {
    return this.isAutenticado;
  }


  setIsAutenticado(value) {
    this.isAutenticado = value;
  }

  postDados(obj) {
    return this.http.post("http://localhost:8080/usuarios/auth", obj);
  }
}
