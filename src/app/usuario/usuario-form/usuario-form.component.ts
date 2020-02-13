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
  pokemonSelecionado: any = [];
  offset: number = 0;
  limit: number = 0;
  mostrartexto = "Meu botão";
  isHabilitado = true;

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

  inverte(){
    if (this.isHabilitado == true)
   this.isHabilitado = false
    else {
      this.isHabilitado = true
    }
  }

  //poderia ser assim! this.ishabilitado = !this.isHabilitado!
    

  ngOnInit(): void {
  }

  selecionarPokemon(url){
    this.usuarioService.getAbilities(url).subscribe(
      (resposta) => {
      this.pokemonSelecionado = resposta;
      console.log (resposta);      
      }
    );
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
