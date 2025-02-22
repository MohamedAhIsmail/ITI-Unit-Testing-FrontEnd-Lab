import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'squarePipe'
})
export class SquarePipeForLab implements PipeTransform {
  
  transform(value: number | string): number | string {
    if (typeof value === 'number') {
      return value * value;
    }
  
    const num = parseInt(value);
    return isFinite(num) ? num * num : 'not a number';
  }
}
