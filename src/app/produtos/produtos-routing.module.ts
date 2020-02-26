import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosModule } from './produtos.module';
import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAdmComponent } from './lista-adm/lista-adm.component';


const routes: Routes = [
  {path : '', component : ProdutosComponent},
  {path : 'list', component : ListarProdutosComponent},
  {path : 'edit/:id', component : ProdutosComponent},
  {path : 'list-adm', component : ListaAdmComponent,
      canActivate : [ AuthGuardService ]},
  {path : 'carrinho', component : CarrinhoComponent} 
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
