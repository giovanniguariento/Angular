import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  dados: any = [];

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ) { }

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

  deletar(id_usuario_list) {
    this.usuarioService.deleteUsuario(id_usuario_list).subscribe(
      (success) => {
        console.log(success);

        this.getDados();

        let index = this.dados.findIndex((elemento) => { return elemento.id == id_usuario_list });

        this.dados.splice(index, 1);

        this.toastr.success('Usuário deletado com sucesso!');

      },
      (error) => { console.log(error) }
    );
  }
  editar(id_usuario_edit) {
    this.router.navigate(['/usuarios/edit/', id_usuario_edit])

  }


}
