import { ProdutosModule } from './produtos.module';
import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAdmComponent } from './lista-adm/lista-adm.component';


const routes: Routes = [
  {path : 'produtos', component : ProdutosComponent},
  {path : 'produtos/list', component : ListarProdutosComponent},
  {path : 'edit/:id', component : ProdutosComponent},
  {path : 'produtos/list-adm', component : ListaAdmComponent,
      canActivate : [ AuthGuardService ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
