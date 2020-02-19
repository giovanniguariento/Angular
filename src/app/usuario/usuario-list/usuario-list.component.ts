import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  dados : any = [];

  constructor(private usuarioService: UsuarioService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getDados();
  }

  private getDados() {
    this.usuarioService.getDados().subscribe(
      (success) => {
        console.log (success);
        this.dados = success;
      },
      (error)=> {console.log (error)}
    );
  }

  editar(){

  }
  deletarDados(id_usuario_list){
    this.usuarioService.deleteDados(id_usuario_list).subscribe(
      (success) => {
        this.toastr.success ('Usuario deletado');
        this.getDados()
      }
    );
  }



}
