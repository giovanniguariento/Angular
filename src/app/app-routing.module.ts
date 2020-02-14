import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:  ' ', component : HomeComponent },
  {path: 'home' , component : HomeComponent},
  {path: 'usuarios', component : UsuarioFormComponent}
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
