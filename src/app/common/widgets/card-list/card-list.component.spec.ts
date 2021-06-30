import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { CardListComponent } from './card-list.component';

fdescribe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent],
      imports: [
        MatListModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
