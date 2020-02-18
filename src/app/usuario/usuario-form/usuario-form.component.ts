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

  user: any = [];
  endereco: any = [];

  constructor(
    private cepService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.addusuarios = this.formBuilder.group({
      nomeInput: ['', []],
      senhaInput: ['', []],
      emailInput: ['', []],
      cepInput: ['', []],
      cidadeInput: ['', []],
      logradouroInput: ['', []],
      numeroInput: ['', []],
      complementoInput: ['', []],
      bairroInput: ['', []],
      estadoInput: ['', []]
    });

  }

  getEndereco() {
    let cep = this.addusuarios.value.cepInput;
    console.log(cep)

    this.cepService.getCep(cep).subscribe(
      (success: any) => {
        console.log(success);
        this.addusuarios.patchValue({
          cidadeInput : success.localidade,
          logradouroInput : success.logradouro,
          bairroInput: success.bairro,
          estadoInput: success.uf
        })
      },
      (error) => {
        console.log(error);
      }

    );
  }


  onSubmit() {
    console.log(this.addusuarios)
  }



  inverte() {
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
