import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = environment.api + "produtos/"

  constructor( private http : HttpClient) { }


postDados(obj){
  return this.http.post (this.url, obj);

}

getDados () {
  return this.http.get(this.url);
}

deleteDados (id_produto) {
  //console.log(this.url + id_produto)
  return this.http.delete(this.url + id_produto);
}

getOneUsuario(id_produto) {
return this.http.get(this.url + id_produto);
}

patchUsuario (id_produto, obj) {
return this.http.post (this.url + id_produto, obj);
}

}

