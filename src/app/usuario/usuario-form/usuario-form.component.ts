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
  cep :number;
  endereco : any = [];

  constructor(private enderecoService: UsuarioService, private formBuilder : FormBuilder) { 
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

  getEndereco(value) {
    this.cep = value
    console.log(this.cep)
    this.enderecoService.getCep(this.cep).subscribe(
        (success) => {
        console.log (success);
        this.endereco = success;
      },
      
    );

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
