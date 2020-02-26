import { MenuService } from './../shared/services/menu.service';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('botaoAdm', { static: false } ) ref: ElementRef;

  isBotaoAdm = false;

  constructor(private loginService: LoginService, private menuService : MenuService) {

    this.menuService.menuSubject.subscribe(
      (success) => {
        console.log ('subject' , success);
        this.isBotaoAdm = success;
        this.ref.nativeElement.hidden = this.isBotaoAdm; 
      }
    );

  }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
    
  //   this.ref.nativeElement.hidden = this.isBotaoAdm;
  // }

  desLogar() {
    this.loginService.setIsAutenticado(false);
  }

  escondeBotao() {
    return this.loginService.isUsuarioAutenticado();
  }

}
