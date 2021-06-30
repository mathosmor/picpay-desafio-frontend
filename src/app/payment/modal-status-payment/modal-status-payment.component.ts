import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-status-payment',
  templateUrl: './modal-status-payment.component.html',
  styleUrls: ['./modal-status-payment.component.scss']
})
export class ModalStatusPaymentComponent implements OnInit {

  response: string;

  constructor(@Inject(MAT_DIALOG_DATA) public responsePayment: boolean) { }

  ngOnInit() {
    this.getTransactionData();
  }

  getTransactionData() {
    if (this.responsePayment) {
      this.response = 'O pagamento foi realizado com sucesso.';
    } else {
      this.response = `O pagamento <b>não</b> foi realizado com sucesso.`
    }
  }

}
