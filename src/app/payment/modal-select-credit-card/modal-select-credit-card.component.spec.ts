import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentModule } from '../payment.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModalSelectCreditCardComponent } from './modal-select-credit-card.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalSelectCreditCardComponent', () => {
  let component: ModalSelectCreditCardComponent;
  let fixture: ComponentFixture<ModalSelectCreditCardComponent>;
  let compiled;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PaymentModule,
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectCreditCardComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    component.formPayment = formBuilder.group({
      paymentValue: [null, Validators.required],
      paymentCreditCard: [null, Validators.required],
    });
    component.dataUser = {
      user: {
        item: {
          id: 1001,
          name: "Eduardo Santos",
          img: "https://randomuser.me/api/portraits/men/9.jpg",
          username: "@eduardo.santos",
        }
      }
    }

    fixture.detectChanges();
  });

  it('[payment/selecionarCartao/formularios] Deve vincular os valores preenchidos nos formulários com as propriedades do formulário.', () => {
    component.formPayment.controls['paymentValue'].setValue(2000);
    component.formPayment.controls['paymentCreditCard'].setValue('1111111111111111')
    const paymentValue = compiled.querySelector('#modal-select-credit-card--input-value');
    const paymentCreditCard = compiled.querySelector('#modal-select-credit-card--select-credit-card');

    
    paymentValue.value = 2000;
    paymentCreditCard.value = '1111111111111111';
    fixture.detectChanges();

    paymentValue.dispatchEvent(new Event('input'));
    paymentCreditCard.dispatchEvent(new Event('input'));

    expect(component.formPayment.controls.paymentValue.value).toBe((parseInt(paymentValue.value)));
    expect(component.formPayment.controls.paymentCreditCard.value).toBe(paymentCreditCard.value);
  });
});
