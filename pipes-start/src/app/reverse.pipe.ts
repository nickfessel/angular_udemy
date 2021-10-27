import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    var valueArray = Array.from(value);
    return valueArray.reverse().join('');
  }
}