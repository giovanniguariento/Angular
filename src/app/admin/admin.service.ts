import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlProduto = environment.api + "produtos/";

  constructor(private http: HttpClient) { 

  }

  criarProdutos(obj) {
    return this.http.post(this.urlProduto, obj);
  }
  getProdutos() {
    return this.http.get(this.urlProduto);
  }

  delProdutos(id_usuario) {
    return this.http.delete(this.urlProduto + id_usuario);
  }
  getOneUsuario(id_usuario) {
    return this.http.get(this.urlProduto + id_usuario);
  }
  patchUsuario(id_usuario, obj) {
    return this.http.post(this.urlProduto + id_usuario, obj);
  }
  postDados(obj) {
    return this.http.post(this.urlProduto, obj);
  }

}
