import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';


@NgModule({
  declarations: [ProdutosComponent, ProdutosListComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProdutosListComponent
  ]
})
export class ProdutosModule { }
