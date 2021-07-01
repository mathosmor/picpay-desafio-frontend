import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentModule } from '../payment.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModalSelectCreditCardComponent } from './modal-select-credit-card.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

xdescribe('ModalSelectCreditCardComponent', () => {
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
    fixture.detectChanges();
  });

  it('[payment/selecionarCartao/formularios] Deve vincular os valores preenchidos nos formulários com as propriedades do formulário.', async () => {
    const paymentValue = compiled.querySelector('#modal-select-credit-card--input-value');
    const paymentCreditCard = compiled.querySelector('#modal-select-credit-card--select-credit-card');

    fixture.detectChanges();

    paymentValue.value = 2000;
    paymentCreditCard.value = '1111111111111111';

    paymentValue.dispatchEvent(new Event('input'));
    paymentCreditCard.dispatchEvent(new Event('input'));

    fixture.detectChanges();


    expect(component.formPayment.controls.paymentValue.value).toBe(paymentValue.value);
    expect(component.formPayment.controls.paymentCreditCard.value).toBe(paymentCreditCard.value);
  });
});
