import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ListaAdmComponent } from './lista-adm/lista-adm.component';


@NgModule({
  declarations: [ProdutosComponent, ListarProdutosComponent, ListaAdmComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProdutosModule { }
