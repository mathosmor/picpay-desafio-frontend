import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { of } from 'rxjs';
import { ComponentsModule } from '../shared/components/components.module';
import { UserService } from '../shared/services/user.service';

import { PaymentComponent } from './payment.component';

fdescribe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  class UserServiceMock {
    saveAccountDataResponse = {
      id: 1001,
      name: "Eduardo Santos",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "@eduardo.santos",
    };

    public GetUsers() {
      return of(this.saveAccountDataResponse);
    }
  }

  const userService: UserServiceMock = new UserServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [
        ComponentsModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: UserService, useValue: userService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
