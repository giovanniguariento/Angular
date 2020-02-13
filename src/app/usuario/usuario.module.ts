import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariodetalheComponent } from './usuariodetalhe/usuariodetalhe.component';



@NgModule({
  declarations: [UsuarioFormComponent, UsuariodetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioFormComponent
  ]
})
export class UsuarioModule { }
