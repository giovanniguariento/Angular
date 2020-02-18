import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.produtos = this.formBuilder.group({
        nameInput: ['', []],
        princeInput: ['',[]],
        textInput: ['',[]]
      });

  }

  ngOnInit(): void {
  }


  onCadastrar(){
    console.log (this.produtos)
  }

}