import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { GrifarParagrafoDirective } from './diretivas/grifar-paragrafo.directive';
import { DataPipe } from './pipes/data.pipe';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowErrosComponent } from './messages/show-erros/show-erros.component';
import { DebugFormComponent } from './messages/debug-form/debug-form.component';



@NgModule({
  declarations: [UsuarioFormComponent, GrifarParagrafoDirective, DataPipe, TemplateFormComponent, DataFormComponent, ShowErrosComponent,  DebugFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    UsuarioFormComponent
  ]
})
export class UsuarioModule { }
