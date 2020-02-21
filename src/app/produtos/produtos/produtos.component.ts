import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private toastr: ToastrService,
    private router: Router,

  ) {
    this.produtos = this.formBuilder.group({
      nome: ['', []],
      preco: ['', []],
      descricao: ['', []]
    });

  }

  ngOnInit(): void {
  }


  onCadastrar() {
    console.log(this.produtos)
    let obj = {
      nome: this.produtos.value.nome,
      preco: this.produtos.value.preco,
      descricao: this.produtos.value.descricao
    }
    this.produtosService.criarProdutos(obj).subscribe(
      (response: any) => {

        console.log(response);
        this.toastr.success('produto inserido com sucesso!' + "codigo do produto " + response.id);
        this.router.navigate(['/home']);
      },
    )


  }

}