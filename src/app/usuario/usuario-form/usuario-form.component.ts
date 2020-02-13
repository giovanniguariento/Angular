import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarios: any = [];
  pokemons: any = [];

  offset: number = 0;
  limit: number = 0;

  user : any = [];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getAll();
    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success) => {
        console.log(success)
        this.pokemons = success;
      },
    );
    this.user = this.usuarioService.getAll();
    this.usuarioService.getAllusers().subscribe(
      (success) => {
        this.user = success;
      },
    );
  }

  ngOnInit(): void {
  }
  

  proximaPagina() {
    this.offset += 20
   
    this.usuarioService.getAllPokemons(this.offset).subscribe(
      (success) => {
        this.pokemons = success;

      }
    );
  }
}
