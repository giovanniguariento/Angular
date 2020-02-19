import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  dados : any = [];

  constructor(private usuarioService: UsuarioService) { }

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



}
