import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariodetalheComponent } from './usuariodetalhe/usuariodetalhe.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';



@NgModule({
  declarations: [UsuarioFormComponent, UsuariodetalheComponent, GrifarParagrafoDirective],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioFormComponent
  ]
})
export class UsuarioModule { }
