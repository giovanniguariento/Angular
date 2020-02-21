import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos : FormGroup;
  isEdicao = false;
  idProdutos = 0;

  dados : any = [];

  constructor(private formBuilder : FormBuilder, private produtosService : ProdutosService, 
    private toastr : ToastrService, private router : Router) { 
      

    }

  ngOnInit(): void {
    this.getDados();
  }

    getDados() {
    this.produtosService.getDados().subscribe(
      (success) => {
        console.log (success);
        this.dados = success;
      },
      (error)=> {console.log (error)}
    );
  }

}
