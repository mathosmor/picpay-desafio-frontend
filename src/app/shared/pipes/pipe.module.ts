import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardMaskPipe } from './credit-card-mask.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreditCardMaskPipe
  ],
  exports: [
    CreditCardMaskPipe
  ]
})
export class PipeModule { }
