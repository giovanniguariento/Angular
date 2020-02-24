import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlProduto = environment.api + "produtos/";

  constructor(private http: HttpClient) { 

  }

  criarProdutos(obj) {
    return this.http.post(this.urlProduto, obj);
  }
  getDados() {
    return this.http.get(this.urlProduto);
  }
  getOneUsuario(id_usuario) {
    return this.http.get(this.urlProduto + id_usuario);
  }
  patchprodutos(id_usuario, obj) {
    return this.http.post(this.urlProduto + id_usuario, obj);
  }
}
