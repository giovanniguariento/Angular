import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  addusuarios: FormGroup;

  usuarios: any = [];
  offset: number = 0;
  limit: number = 10;
  mostrartexto = "Meu botão";
  isHabilitado = true;

  user : any = [];

  constructor(private usuarioService: UsuarioService, private formBuilder : FormBuilder) {
    this.usuarios = this.usuarioService.getAll();
   
    this.user = this.usuarioService.getAll();
    this.usuarioService.getAllusers().subscribe(
      (success) => {
        this.user = success;
      },
    );
    this.addusuarios = this.formBuilder.group({
      nameInput: ['', []],
      senhaInput: ['',[]],
      emailInput: ['',[]],
      cepInput: ['',[]],
      cidadeInput: ['',[]],
      logradouroInput: ['',[]],
      numeroInput: ['',[]],
      complementoInput: ['',[]],
      bairroInput: ['',[]],
      estadoInput: ['',[]]
    });

  }

  onSubmit() {
    console.log (this.addusuarios)
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

}
