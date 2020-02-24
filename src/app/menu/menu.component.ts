import { MenuDataService } from './../shared/services/menu-data.service';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('botaoAdm', { static: false } ) ref: ElementRef;

  isBotaoAdm = false;


  constructor(
    private loginService: LoginService,
    private MenuDataService: MenuDataService
  ) { 
    this.MenuDataService.menuMessageBus.subscribe(
      (success) => {
        console.log ('subject' , success);
        this.isBotaoAdm = success;
        this.ref.nativeElement.hidden = this.isBotaoAdm; 
      }
    );
  }

  ngOnInit(): void {
    this.MenuDataService.menuMessageBus.subscribe(
      (response) => {
        console.log('menu comp', response);
      }
    )
  }

  esconderbotao(){
    return this.loginService.isUsuarioAutenticado();
  }
  desLogar() {
    this.loginService.setIsAutenticado(false);
  }

}
