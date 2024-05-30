import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dics',
  standalone: true
})
export class DicsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return Math.ceil(value - (value *args[0])/100);
  }

}
