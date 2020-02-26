import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  textoFormulario: any;
  botaoFormulario: any;
  addusuarios: FormGroup;

  usuario: UsuarioModel;

  //usuarios: any = [];
  offset: number = 0;
  limit: number = 10;
  mostrartexto = "Meu botão";
  isHabilitado = true;
  user: any = [];
  cep: any;
  endereco: any = [];
  isEdicao = false;
  idUsuario = 0;
  textoH1: any = ' ';
  textoBotao: any = ' ';

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    console.log(this.activatedRoute)

    this.addusuarios = new FormGroup({

      usuario: new FormGroup({
        nome: new FormControl(''),
        senha: new FormControl(''),
        email: new FormControl(''),
        cep: new FormControl(''),
        cidade: new FormControl(''),
        numero: new FormControl(''),
        complemento: new FormControl(''),
        bairro: new FormControl(''),
        logradouro: new FormControl(''),
        estado: new FormControl('')
      })
    });

    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("edição");
          this.textoBotao = "Atualizar";
          this.textoH1 = "Atualizar Cadastro";
          this.isEdicao = true;
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (response: UsuarioModel) => {
              this.usuario = response;
              this.addusuarios.patchValue({ usuario: this.usuario });
            },
            (error) => {

            },
          );
        }
        else {
          this.textoBotao = "Cadastrar";
          this.textoH1 = "Formulário de Cadastro";
          console.log("criação");
          this.isEdicao = false;
        }
      }
    );

  }

  getEndereco(value) {
    this.cep = value
    console.log(this.cep)
    this.usuarioService.getCep(this.cep).subscribe(
      (response: any) => {
        console.log(response);
        let obj = {
          cidade: response.localidade,
          logradouro: response.logradouro,
          bairro: response.bairro,
          estado: response.uf,
          cep: response.cep
        }

        this.addusuarios.patchValue( { usuario : obj }  );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.addusuarios);

    console.log(this.isEdicao);
    
    this.usuario = Object.assign({}, this.addusuarios.value.usuario);

    if (this.isEdicao == false) {
      this.usuarioService.postDados(this.usuario).subscribe(
        (response: any) => {

          console.log(response);
          this.toastr.success('Usuário inserido com sucesso!' + response.id);
          this.limpar()
          this.router.navigate(['/usuarios/usuario-list']);
        },
      )
    }
    else {
      this.usuarioService.patchUsuario(this.idUsuario, this.usuario).subscribe(
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
