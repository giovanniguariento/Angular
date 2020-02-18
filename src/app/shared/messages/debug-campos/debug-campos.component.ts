import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug-campos',
  templateUrl: './debug-campos.component.html',
  styleUrls: ['./debug-campos.component.css']
})
export class DebugCamposComponent implements OnInit {

  @Input() campoFilho;

  constructor() { }

  ngOnInit(): void {
  }

}
