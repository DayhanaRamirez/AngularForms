import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customLabel'
})
export class CustomLabelPipe implements PipeTransform {

  transform(value: string): string {
    return `Search ${value}`;
  }

}
