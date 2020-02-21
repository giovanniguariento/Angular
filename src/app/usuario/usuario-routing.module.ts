import { CarrinhoComponent } from './../produtos/carrinho/carrinho.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


const routes: Routes = [
    {path : '', component : UsuarioFormComponent},
    {path : 'edit/:id', component : UsuarioFormComponent},
    {path : 'template-form', component : TemplateFormComponent},
    {path : 'data-form', component : DataFormComponent},
    {path : 'ciclo', component : CicloComponent},
    {path : 'usuario-list', component : UsuarioListComponent},

] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
