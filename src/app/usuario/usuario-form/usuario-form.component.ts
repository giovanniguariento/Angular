import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  cep: number;
  endereco: any = [];

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router

  ) {
    this.addusuarios = this.formBuilder.group({
      nameInput: ['', []],
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

  getEndereco(value) {
    this.cep = value
    console.log(this.cep)
    this.usuarioService.getCep(this.cep).subscribe(
      (response: any) => {
        console.log(response);
        this.addusuarios.patchValue(
          {
            cidadeInput: response.localidade,
            logradouroInput: response.logradouro,
            bairroInput: response.bairro,
            estadoInput: response.uf
          }
        )
        this.endereco = response;
      },
      (error) => {
        console.log(error);
      }

    );
  }


  onSubmit() {
    console.log(this.addusuarios);

    let obj = {
      nome: this.addusuarios.value.nomeInput,
      email: this.addusuarios.value.emailInput,
      senha: this.addusuarios.value.senhaInput,
      tipo_usuario: 1,
      cep: this.addusuarios.value.cepInput,
      logradouro: this.addusuarios.value.logradouroInput,
      numero: this.addusuarios.value.numeroInput,
      complemento: this.addusuarios.value.complementoInput,
      cidade: this.addusuarios.value.cidadeInput,
      bairro: this.addusuarios.value.bairroInput,
      estado: this.addusuarios.value.estadoInput
    }

    this.usuarioService.postDados(obj).subscribe(
      (response: any) => {

        console.log(response);
        this.toastr.success('Usuário inserido com sucesso!' + response.id);
        this.router.navigate(['/usuarios']);
        this.limpar()
      },
    )

  }



  inverte() {
    if (this.isHabilitado == true)
      this.isHabilitado = false
    else {
      this.isHabilitado = true
    }
  }

  limpar() {

    let obj = {

      nameInput: '',
      emailInput: '',
      senhaInput: '',
      tipo_usuario: 1,
      cepInput: '',
      logradouroInput: '',
      numeroInput: '',
      complementoInput: '',
      cidadeInput: '',
      bairroInput: '',
      estadoInput: ''

    }

    this.addusuarios.patchValue(obj)
  }

  //poderia ser assim! this.ishabilitado = !this.isHabilitado!


  ngOnInit(): void {
  }



}
