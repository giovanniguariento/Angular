import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return [
      { id: '1', email: 'GiovanniGuariento97@gmail.com', telefone: '1195445-5058', redesocial: '@giovanni' },
      { id: '2', email: 'GiovanniGuariento@gmail.com', telefone: '1195445-5058', redesocial: '@giovanni' },
      { id: '3', email: 'Giovanni@gmail.com', telefone: '1195445-5058', redesocial: '@giovanni' },
      { id: '4', email: 'Guariento@gmail.com', telefone: '1195445-5058', redesocial: '@guariento' },
      { id: '5', email: 'Gabriel@gmail.com', telefone: '1195445-5058', redesocial: '@grabriel' }

      //vetor     
    ];
    //service getall
  }
  getAllusers() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees?limit=100");
  }

  getCep(cep) {
    return this.http.get("https://viacep.com.br/ws/" + cep + "/json");
  }

  postDados(obj){
    return this.http.post ("http://cursos.grandeporte.com.br:8080/usuarios", obj);

  }

  getDados () {
    return this.http.get("http://cursos.grandeporte.com.br:8080/usuarios");
  }

  deleteDados (id_usuario) {
    return this.http.delete("http://cursos.grandeporte.com.br:8080/usuarios/" + id_usuario);
  }

}
