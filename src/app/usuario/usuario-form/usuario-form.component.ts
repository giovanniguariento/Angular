import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  addusuarios: FormGroup;

  usuarios: any = [];
  offset: number = 0;
  limit: number = 10;
  mostrartexto = "Meu botão";
  isHabilitado = true;

  user : any = [];
  cep :number;
  endereco : any = [];
  usuarioService: any;

  constructor(
    private enderecoService: UsuarioService, 
    private formBuilder : FormBuilder
    
    ) { 
    this.addusuarios = this.formBuilder.group({
      nameInput: ['', [ ]],
      senhaInput: ['',[ ]],
      emailInput: ['',[ ]],
      cepInput: ['',[ ]],
      cidadeInput: ['',[ ]],
      logradouroInput: ['',[ ]],
      numeroInput: ['',[ ]],
      complementoInput: ['',[ ]],
      bairroInput: ['',[ ]],
      estadoInput: ['',[ ]]
    });

  }

  getEndereco(value) {
    this.cep = value
    console.log(this.cep)
    this.enderecoService.getCep(this.cep).subscribe(
        (response : any) => {
        console.log (response);
        this.addusuarios.patchValue(
          {
            cidadeInput : response.localidade,
            logradouroInput  : response.logradouro,
            bairroInput : response.bairro,
            estadoInput : response.uf
          }
        )
        this.endereco = response;
      },
      
    );

    }
  onSubmit() {
    console.log (this.addusuarios);

      let obj = {
        nome: this.addusuarios.value.nomeInput,
        email: this.addusuarios.value.emailInput,
        senha: this.addusuarios.value.senhaInput,
        tipo_usuario: 1,
        cep: this.addusuarios.value.cepInput,
        logradouro: this.addusuarios.value.logradouroInput,
        numero: this.addusuarios.value.numeroInput,
        complemento: this.addusuarios.value.complementoInput,
        cidade: this.addusuarios.value.cidadeInput,
        bairro: this.addusuarios.value.bairroInput,
        estado: this.addusuarios.value.estadoInput
      }

    this.usuarioService.postDados(obj).subscribe(
      (response) => {
        
      },
    )


  }

  

  inverte(){
    if (this.isHabilitado == true)
   this.isHabilitado = false
    else {
      this.isHabilitado = true
    }
  }

  //poderia ser assim! this.ishabilitado = !this.isHabilitado!
    

  ngOnInit(): void {
  }

}
