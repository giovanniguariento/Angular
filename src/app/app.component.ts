import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  teste = 10;
  nome = "Giovanni";   
    show (x) {
    this.title  = x
    console.log (x)
  }
  exiba () {
    alert("Alo");
  }
  exibir (){
    console.log(this.nome)
  }
  numero (){
    console.log(this.nome = "1,2,3,4,5,6")
  }
  
}
