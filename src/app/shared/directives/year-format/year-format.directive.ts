//@ts-nocheck
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYearFormat]'
})
export class YearFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event']) onKeyUp(event: any){
    const initialValue = this.el.nativeElement.value;
    const key = event.KeyCode || event.charCode;
    if(key === 8 || key === 46) return false;
    this.el.nativeElement.value = this.formatValue(initialValue);
    if(initialValue !== this.el.nativeElement.value){
      event.stopPropagation();
    }
  }

  private formatValue(value: string): string{
    let response = '';
    let data = value.replace(/[^0-9]*/g, '').slice(0, 8);

    const dataSize = data.length;
    if(dataSize > 4 && dataSize <= 8){
      response = `${data.slice(0, 4)}-${data.slice(4, dataSize + 1 )}`;
    }
    else{
      response = data;
    }
    return response;
  }

}
