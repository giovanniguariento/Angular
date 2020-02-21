import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  meuForm : FormGroup;

  constructor(private loginService : LoginService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
    this.meuForm = this.formBuilder.group({
    usuario: ['', [ ]],
    senha: ['',[ ]]
  }
  
);
  }


  logar(){
    this.loginService.setIsAutenticado( true );

  }

  desLogar(){
    this.loginService.setIsAutenticado( false );

  }

  onSubmit(){
    console.log (this.meuForm)
  }
  
  getCampo(value){
    return this.meuForm.get( value );

  }

  verificarLogin(){
   

  }



}
