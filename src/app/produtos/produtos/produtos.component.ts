import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : FormGroup;
  isEdicao = false;
  idProdutos = 0;
  dados : any = [];
  textoH1: any = ' ' ; 
  textoBotao:  any = ' ';
  

  constructor(private formBuilder : FormBuilder, private produtosService : ProdutosService, 
              private toastr : ToastrService, private router : Router, 
              private activatedRoute :  ActivatedRoute) { 
    
        this.produtos = this.formBuilder.group({
        nome: ['', []],
        descricao: ['',[]],
        preco: ['',[]]
      });



  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("edição");
          this.textoBotao = "Atualizar";
          this.textoH1 = "Atualizar Produtos";
          this.isEdicao = true;
          this.idProdutos = rota.id;
  
          this.produtosService.getOneUsuario(rota.id).subscribe(
            (response: any) => {
              this.produtos.patchValue(
                {
                  nome: response.nome,
                  preco: response.preco,
                  descricao: response.descricao
                
                }
              );
            },
          )
        }
        else{
          this.textoBotao = "Cadastrar";
          this.textoH1 = "Cadastro de Produtos";
          console.log("criação");
          this.isEdicao = false;
        }
      }
    )
    
  

  }


  onCadastrar() {
    console.log(this.produtos);

    console.log (this.isEdicao)

    let obj = {
      nome: this.produtos.value.nome,
      descricao: this.produtos.value.descricao,
      preco: this.produtos.value.preco
      }
    
    if ( this.isEdicao == false ){
      this.produtosService.postDados(obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.toastr.success('Usuário inserido com sucesso!' + response.id);
          this.router.navigate(['produtos/list']);
        },
      )
    }
    else {
      this.produtosService.patchUsuario(this.idProdutos, obj).subscribe(
        (response: any) => {
  
          console.log(response);
          this.router.navigate(['produtos/list']);
        },
      );
    }
    

  }


}