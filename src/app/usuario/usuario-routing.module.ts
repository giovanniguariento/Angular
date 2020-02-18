import { CicloComponent } from './ciclo/ciclo.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


const routes: Routes = [
    {path : 'usuarios', component : UsuarioFormComponent},
    {path : 'usuarios/template-form', component : TemplateFormComponent},
    {path : 'usuarios/data-form', component : DataFormComponent},
    {path : 'usuarios/ciclo', component : CicloComponent}
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
