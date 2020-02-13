import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuariodetalhe',
  templateUrl: './usuariodetalhe.component.html',
  styleUrls: ['./usuariodetalhe.component.css']
})
export class UsuariodetalheComponent implements OnInit {

  @Input() pokemonDetalhe;
  constructor() { }

  ngOnInit(): void {
  }

}
