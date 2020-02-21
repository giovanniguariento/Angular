import { FormBuilder } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-adm',
  templateUrl: './lista-adm.component.html',
  styleUrls: ['./lista-adm.component.css']
})
export class ListaAdmComponent implements OnInit {

  dados : any = [];
  isEdicao = false;
  idUsuario = 0;
  textoH1: any = ' ' ; 
  textoBotao:  any = ' ';

  constructor(private produtosService : ProdutosService, private toastr : ToastrService, 
    private router : Router, private activatedRoute: ActivatedRoute, private formbuilder : FormBuilder) { 
           
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

  editar(id_usuario_edit){
    this.router.navigate(['edit/', id_usuario_edit])
  }

  deletarDados(id_usuario_list){
    this.produtosService.deleteDados(id_usuario_list).subscribe(
      (success) => {
        this.toastr.success ('Usuario deletado');
        this.getDados()
      }
    );
  }
  
  





}
