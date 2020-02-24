import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosComponent } from './produtos-form/produtos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'new', component : ProdutosComponent},
  {path : 'produtos-list', component : ProdutosListComponent},
  {path : 'edit/:id', component : ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
