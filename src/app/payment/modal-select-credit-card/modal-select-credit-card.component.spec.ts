import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectCreditCardComponent } from './modal-select-credit-card.component';

describe('ModalSelectCreditCardComponent', () => {
  let component: ModalSelectCreditCardComponent;
  let fixture: ComponentFixture<ModalSelectCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
