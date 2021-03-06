import { Component, Inject, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DataUser, User } from 'src/app/shared/models/user';
import { TransactionPayload } from 'src/app/shared/models/transaction-payload';
import { TransactionPayloadService } from 'src/app/shared/services/transaction-payload.service';
import { ModalStatusPaymentComponent } from '../modal-status-payment/modal-status-payment.component';
import { CreditCard } from 'src/app/shared/models/credit-card';

@Component({
  selector: 'app-modal-select-credit-card',
  templateUrl: './modal-select-credit-card.component.html',
  styleUrls: ['./modal-select-credit-card.component.scss'],
})
export class ModalSelectCreditCardComponent implements OnInit {

  name: string;
  selected: string;
  title: string;
  responsePayment: boolean;

  user: User;
  formPayment: FormGroup;
  dataCreditCard: CreditCard[] = []
  maskOptions;

  constructor(
    public dialog: MatDialog,
    private transactionService: TransactionPayloadService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataUser: DataUser) { }

  ngOnInit() {
    this.initialize()
  }

  initialize() {
    this.user = this.dataUser.user.item;
    this.title = 'Pagamento para ' + this.user.name;
    this.createForm();
    this.maskOptions = { prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' };
    this.dataCreditCard = [
      //valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];
  }

  createForm() {
    this.formPayment = this.fb.group({
      paymentValue: [null, Validators.required],
      paymentCreditCard: [null, Validators.required],
    });
  }

  savePayment() {
    const creditCard = this.formPayment.controls.paymentCreditCard.value;
    const value = this.formPayment.controls.paymentValue.value;

    if (creditCard.card_number === '4111111111111234') {
      return this.openDialog(false);
    }

    const dataTransaction: TransactionPayload = {
      card_number: creditCard.card_number,
      cvv: creditCard.cvv,
      expiry_date: creditCard.cvv,
      destination_user_id: this.user.id,
      value: value,
    };

    this.transactionService.saveTransaction(dataTransaction).subscribe(x => {
      this.openDialog(x.success);
    });
  }

  openDialog(response) {
    this.formPayment.reset();
    this.dialog.closeAll()
    this.dialog.open(ModalStatusPaymentComponent, {
      height: '250px',
      width: '600px',
      data: response,
    });
  }

  getErrorMessageValue() {
    if (this.formPayment.controls.paymentValue.hasError('required')) {
      return 'Voc?? deve inserir um valor!';
    }
    if (this.formPayment.controls.paymentValue.invalid) {
      return 'Voc?? deve inserir um valor maior que zero!';
    }
  }

  getErrorMessageSelect() {
    if (this.formPayment.controls.paymentCreditCard.hasError('required')) {
      return 'Voc?? deve selecionar um cart??o de cr??dito!';
    }
  }
}
