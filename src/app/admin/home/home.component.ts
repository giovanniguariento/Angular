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

   
  }

  onSubmit() {
    console.log(this.addprodutos);

    console.log (this.isEdicao)

    let obj = {
      nome: this.addprodutos.value.nome,
      preco: this.addprodutos.value.preco,
      descricao: this.addprodutos.value.descricao,
      tipo_usuario: 1
    }
    
    if ( this.isEdicao == false ){
      this.usuarioService.postDados(obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.toastr.success('produto inserido com sucesso! ' + response.id);
          this.limpar()
          this.router.navigate(['/admin/home']);
        },
      )
    }
    else {
      this.usuarioService.patchUsuario(this.idUsuario, obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.toastr.success('Produto atualizado com sucesso! ' + response.id);
          this.router.navigate(['/admin/home']);
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
