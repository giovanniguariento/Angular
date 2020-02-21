import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'produtos', component : ProdutosComponent},
  {path : 'produtos/produtos-list', component : ProdutosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
