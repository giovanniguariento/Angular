import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.LoginService.setIsAutenticado(true);
  }
  logout(){
    this.LoginService.setIsAutenticado(false);
  }
}
