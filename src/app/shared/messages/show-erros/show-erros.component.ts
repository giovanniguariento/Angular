import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-erros',
  templateUrl: './show-erros.component.html',
  styleUrls: ['./show-erros.component.scss']
})
export class ShowErrosComponent implements OnInit {

  @Input() mensagem;
  @Input() isErrorFilho;

  constructor() { }

  ngOnInit(): void {
  }

}
