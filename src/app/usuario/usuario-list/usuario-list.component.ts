import { UsuarioModel } from './../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  dados: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService, private toastr : ToastrService, private router : Router) { }

  ngOnInit(): void {
    this.getDados();
  }

  private getDados() {
    this.usuarioService.getDados().subscribe(
      (success) => {
        console.log(success);
        this.dados = success;
      },
      (error) => { console.log(error) }
    );
  }

  editar(id_usuario_edit){
    this.router.navigate(['/usuarios/edit/', id_usuario_edit])
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
