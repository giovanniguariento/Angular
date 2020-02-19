import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

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
  cep: any;
  endereco: any = [];
  isEdicao = false;
  idUsuario = 0;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    console.log(this.activatedRoute)

    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("edição");
          this.isEdicao = true;
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (response: any) => {
              this.addusuarios.patchValue(
                {
                  cidadeInput: response.localidade,
                  logradouroInput: response.logradouro,
                  bairroInput: response.bairro,
                  estadoInput: response.estado,
                  nameInput: response.nome,
                  senhaInput: response.senha,
                  emailInput: response.email,
                  cepInput: response.cep,
                  numeroInput: response.numero,
                  complementoInput: response.complemento
                }
              );
            },
          )
        }
        else{
          console.log("criação");
          this.isEdicao = false;
        }
      }
    )
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
            estadoInput: response.estado
          }
        )
        this.endereco = response;
      },

    );
  }

  onSubmit() {
    console.log(this.addusuarios);

    console.log (this.isEdicao)

    let obj = {
      nome: this.addusuarios.value.nameInput,
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
    
    if ( this.isEdicao == false ){
      this.usuarioService.postDados(obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.toastr.success('Usuário inserido com sucesso!' + response.id);
          this.limpar()
          this.router.navigate(['/usuarios/usuario-list']);
        },
      )
    }
    else {
      this.usuarioService.patchUsuario(this.idUsuario, obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.toastr.success('Usuário atualizado com sucesso!' + response.id);
          this.router.navigate(['/usuarios/usuario-list']);
        },
      );
    }
    

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
