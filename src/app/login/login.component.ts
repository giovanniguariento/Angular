import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './../shared/guards/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  meuForm: FormGroup;

  constructor(private loginService: LoginService, 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {

    this.meuForm = this.formBuilder.group({
      usuario: ['', []],
      senha: ['', []]
    }

    );
  }


  logar() {
    this.loginService.setIsAutenticado(true);

  }

  desLogar() {
    this.loginService.setIsAutenticado(false);

  }

  onSubmit(obj) {
    this.loginService.postDados(obj).subscribe(
      (success) => {
        console.log(success);
        if(success == true){
          this.loginService.setIsAutenticado(success);
          this.toastr.success('Logado com sucesso'); 
          this.router.navigate(['admin/home']);
        }else{
          this.toastr.success('Usuario e senha errado');
          this.router.navigate(['/usuarios']);
        }   
      },
      (error) => {
        console.log(error)
        this.loginService.setIsAutenticado(error);
        this.toastr.success('Usuario e senha errado');
        this.router.navigate(['/usuarios']);
      }
    )

  }

  getCampo(value) {
    return this.meuForm.get(value);

  }



}
