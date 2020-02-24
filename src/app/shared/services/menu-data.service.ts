import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  //grupo do whatsapp
  menuMessageBus = new Subject<boolean>();

  constructor() { }
}
