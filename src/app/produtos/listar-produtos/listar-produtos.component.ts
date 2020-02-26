import { MenuService } from './../../shared/services/menu.service';
import { LoginService } from './../../shared/guards/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit, AfterContentInit {

  produtos : FormGroup;
  isEdicao = false;
  idProdutos = 0;

  dados : any = [];

  meuForm: FormGroup;

  @ViewChild ('closebutton', {static : false}) closebutton;

  constructor(private formBuilder : FormBuilder, private produtosService : ProdutosService, 
    private toastr : ToastrService, private router : Router,
    private loginService: LoginService,  
    private menuService : MenuService,
    private elem: ElementRef) { 

      this.meuForm = this.formBuilder.group({
        usuario: ['', []],
        senha: ['', []]
      }
  
      );
      

    }

  ngOnInit(): void {
    this.getDados();
  }

    getDados() {
    this.produtosService.getDados().subscribe(
      (success) => {
        console.log (success);
        this.dados = success;
      },
      (error)=> {console.log (error)}
    );
  }

  logar() {
    this.loginService.setIsAutenticado(true);
  }

  desLogar() {
    this.loginService.setIsAutenticado(false);

  }

  onSubmit() {

    console.log(this.meuForm)
    let obj = {
      email: this.meuForm.value.usuario,
      senha: this.meuForm.value.senha,
    }

    // console.log (this.modal);
    // this.modal.nativeElement.show = false;
    // this.modal.nativeElement.style.display ='none';
    // console.log ( this.modal.nativeElement.className );
    
    

    this.loginService.login(obj).subscribe(
      (success) => {

        if (success == true){
          this.closebutton.nativeElement.click();
          this.menuService.menuSubject.next ( false ); 
        }
        else {
          this.closebutton.nativeElement.click();
          this.menuService.menuSubject.next ( true );
        }

        // let elements = this.elem.nativeElement.querySelectorAll('.modal-backdrop');

        // console.log (elements);
    
        // if (elements.length) {
        //   for(let i=0;i<elements.length;i++) {
        //     elements[i].classList.remove('modal-backdrop');
        //   }
        // }

        this.loginService.setIsAutenticado( success );
        

        if (success == true) {
          this.router.navigate(['produtos/list'])
          this.toastr.success('Logado com Sucesso!')
          //this.router.navigate(['admin/home']);
        }
        else {
          this.router.navigate(['/admin/home'])
          this.toastr.error('Usuário não encontrado')
        }

      }

    );
  }

  getCampo(value) {
    return this.meuForm.get(value);

  }

  verificarLogin() {

  }

  ngAfterContentInit(){


  }
}
