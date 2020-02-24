import { ProdutosService } from '../produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: FormGroup;
  isEdicao = false;
  idUsuario = 0;
  textoH1: any = ' ';
  textoBotao: any = ' ';

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.produtos = this.formBuilder.group({
      nome: ['', []],
      preco: ['', []],
      descricao: ['', []]
    });

  }

  ngOnInit(): void {

    console.log(this.activatedRoute)

    this.activatedRoute.params.subscribe(
      (rota) => {
        if (rota.id) {
          console.log("edição");
          this.textoBotao = "Atualizar";
          this.textoH1 = "Atualizar Produtos";
          this.isEdicao = true;
          this.idUsuario = rota.id;

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
        else {
          this.textoBotao = "Cadastrar";
          this.textoH1 = "Cadastrar Produto";
          console.log("criação");
          this.isEdicao = false;
        }
      }
    )
    this.produtos = this.formBuilder.group({
      nome: ['', []],
      preco: ['', []],
      descricao: ['', []]
    });


  }


  onCadastrar() {
    console.log(this.produtos)
    let obj = {
      nome: this.produtos.value.nome,
      preco: this.produtos.value.preco,
      descricao: this.produtos.value.descricao
    }

    if (this.isEdicao == false) {
      this.produtosService.criarProdutos(obj).subscribe(
        (response: any) => {

          console.log(response);
          this.toastr.success('produto inserido com sucesso!' + "numero do produto " + response.id);
          this.router.navigate(['/admin/home']);
        },
      )
    }

    else {
      this.produtosService.patchprodutos(this.idUsuario, obj).subscribe(
        (response: any) => {

          console.log(response);
          this.toastr.success('Produto atualizado com sucesso!' + response.id);
          this.router.navigate(['/admin/home']);
        },
      );
    }


  }

}
