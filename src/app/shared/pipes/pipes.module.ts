import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelPipe } from './customLabel/custom-label.pipe';



@NgModule({
  declarations: [
    CustomLabelPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [CustomLabelPipe]
})
export class PipesModule { }
