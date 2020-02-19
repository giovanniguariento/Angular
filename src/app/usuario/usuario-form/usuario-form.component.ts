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
  isEdicao = false;
  idUsuario = 0;

  user: any = [];
  cep: number;
  endereco: any = [];

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activeRoute: ActivatedRoute

  ) {

    console.log(this.activeRoute);

    this.activeRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("editar");
          this.isEdicao = true;
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (sucess: any) => {
              let obj = {

                nomeInput: sucess.nome,
                emailInput: sucess.email,
                senhaInput: sucess.senha,
                cepInput: sucess.cep,
                numeroInput: sucess.numero,
                cidadeInput: sucess.cidade,
                complementoInput: sucess.complemento,
                logradouroInput: sucess.logradouro,
                bairroInput: sucess.bairro,
                estadoInput: sucess.estado
              }
              this.addusuarios.patchValue(obj);

            },
            (error) => {

            }
          )

        } else {
          console.log("criacao");
          this.isEdicao = false;
        }

      }
    )




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

    if (this.isEdicao == false) {

      this.usuarioService.postDados(obj).subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Usuário inserido com sucesso!' + response.id);
          this.router.navigate(['/usuarios']);
          this.limpar()
        },
      )

    } else {
      this.usuarioService.updateUsuario(this.idUsuario, obj).subscribe(

        (response: any) => {
          console.log(response);
          this.toastr.success('Alterado com sucesso!' + response.id);
          this.router.navigate(['/usuarios']);
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
