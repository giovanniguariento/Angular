import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  dados: any = [];

  constructor(
    private produtosService: ProdutosService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getDados();
  }

  private getDados() {
    this.produtosService.getDados().subscribe(
      (success) => {
        console.log(success);
        this.dados = success;
      },
      (error) => { console.log(error) }
    );
  }

}
