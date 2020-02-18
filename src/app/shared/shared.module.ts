import { DebugFormComponent } from './messages/debug-form/debug-form.component';
import { ShowErrosComponent } from './messages/show-erros/show-erros.component';
import { DebugCamposComponent } from './messages/debug-campos/debug-campos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ 
    DebugFormComponent, 
    ShowErrosComponent,  
    DebugCamposComponent 
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ShowErrosComponent,
    DebugCamposComponent,
    DebugFormComponent
  ]
})
export class SharedModule { }
