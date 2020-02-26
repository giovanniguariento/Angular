import { MenuDataService } from './../shared/services/menu-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  meuForm: FormGroup;

  constructor(
    private loginService: LoginService,
     private formBuilder: FormBuilder,
     private router : Router, 
     private toastr : ToastrService,
     private menuDataService: MenuDataService) { 
    
    this.meuForm = this.formBuilder.group({
      usuario: ['', []],
      senha: ['', []]
    }

    );
  }

  ngOnInit(): void {
  }


  logar() {
    this.loginService.setIsAutenticado(true);

  }

  desLogar() {
    this.loginService.setIsAutenticado(false);

  }

  onSubmit() {

     console.log (this.meuForm)
    let obj = {
      email: this.meuForm.value.usuario,
      senha: this.meuForm.value.senha,
    }

    this.loginService.login(obj).subscribe(
      (success) => {

        this.loginService.setIsAutenticado(success)
        
        if (success == true){   
        this.router.navigate(['/admin/home'])
        this.toastr.success ('Logado com Sucesso!')
        //this.router.navigate(['admin/home']);
      }
      else { this.router.navigate(['/admin/home'])
      this.toastr.error ('Usuário não encontrado')  }

      }

    );
  }

  getCampo(value) {
    return this.meuForm.get(value);

  }

  notificar(){
    this.menuDataService.menuMessageBus.next(true);
  }


}
