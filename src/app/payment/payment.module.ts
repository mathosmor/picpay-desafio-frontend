import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { ModalSelectCreditCardComponent } from './modal-select-credit-card/modal-select-credit-card.component';
import { ModalStatusPaymentComponent } from './modal-status-payment/modal-status-payment.component';
import { WidgetsModule } from '../common/widgets/widgets.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../common/pipes/pipe.module';
import { NgxCurrencyModule } from 'ngx-currency';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaymentRoutingModule,
    WidgetsModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PipeModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  declarations: [
    PaymentComponent,
    ModalSelectCreditCardComponent,
    ModalStatusPaymentComponent
  ],
  entryComponents: [
    ModalSelectCreditCardComponent,
    ModalStatusPaymentComponent
  ]
})
export class PaymentModule { }
