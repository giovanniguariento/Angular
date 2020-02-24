import { AdminService } from './../admin.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { textoFormulario: any;
  botaoFormulario: any;
  addprodutos: FormGroup;
  dados: any = [];
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
  textoH1: any = ' ' ; 
  textoBotao:  any = ' ';

  constructor(
    private usuarioService: AdminService,
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
          this.textoBotao = "Atualizar";
          this.textoH1 = "Atualizar Cadastro";
          this.isEdicao = true;
          this.idUsuario = rota.id;

          this.usuarioService.getOneUsuario(rota.id).subscribe(
            (response: any) => {
              this.addprodutos.patchValue(
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
          this.textoBotao = "Cadastrar";
          this.textoH1 = "Formulário de Cadastro";
          console.log("criação");
          this.isEdicao = false;
        }
      }
    )
    this.addprodutos = this.formBuilder.group({
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

  onSubmit() {
    console.log(this.addprodutos);

    console.log (this.isEdicao)

    let obj = {
      nome: this.addprodutos.value.nameInput,
      email: this.addprodutos.value.emailInput,
      senha: this.addprodutos.value.senhaInput,
      tipo_usuario: 1,
      cep: this.addprodutos.value.cepInput
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

      nome: '',
      descricao: '',
      preco: '',
      tipo_usuario: 1

    }

    this.addprodutos.patchValue(obj)
  }

  private getDados() {
    this.usuarioService.getProdutos().subscribe(
      (success) => {
        console.log(success);
        this.dados = success;
      },
      (error) => { console.log(error) }
    );
  }

  editar(id_usuario_edit){
    this.router.navigate(['/produtos/edit/', id_usuario_edit])
  }

  deletar(id_usuario_list){
    this.usuarioService.delProdutos(id_usuario_list).subscribe(
      (success) => {
        this.toastr.success ('Usuario deletado');
        this.getDados();
      }
    );
  }

  


  ngOnInit(): void {
    this.getDados();
  }



}
