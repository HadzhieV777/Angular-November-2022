import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {

  transform(array: any[], reduceFn: ()): unknown {
    return null;
  }

}
