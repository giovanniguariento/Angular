import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log ('pipe', name )
    //return value.split('').reverse().join('');
    return value.split('');
  }

}
