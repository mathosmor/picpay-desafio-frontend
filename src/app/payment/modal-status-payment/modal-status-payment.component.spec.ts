import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ModalStatusPaymentComponent } from './modal-status-payment.component';

describe('ModalStatusPaymentComponent', () => {
  let component: ModalStatusPaymentComponent;
  let fixture: ComponentFixture<ModalStatusPaymentComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        MatDialogModule,
      ],
      declarations: [
        ModalStatusPaymentComponent
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    component.title = 'Recibo de pagamento';
  });

  it('[payment/status-pagamento/resposta-pagamento] Deve verificar se a resposta foi exibida corretamente', async () => {
    const response = compiled.querySelector('#modal-status-payment--txt-response');

    fixture.detectChanges();

    response.value = 'O pagamento foi realizado com sucesso.';

    fixture.detectChanges();

    expect(component.response).toBe(response.value);
  });
});
