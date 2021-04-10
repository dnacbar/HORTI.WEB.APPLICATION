import { OnlyNumberDirective } from './../../model/directive/only-number.directive';
import { PhonePipe } from '../../model/pipe/phone.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhonePipe, OnlyNumberDirective],
  imports: [
    CommonModule
  ],
  exports:[
    PhonePipe,
    OnlyNumberDirective
  ]
})
export class SharedModule { }
