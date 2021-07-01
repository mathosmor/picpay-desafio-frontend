import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { CardListComponent } from './card-list.component';

xdescribe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let compiled;

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
    compiled = fixture.debugElement.nativeElement;
    component.listItem = [{
      id: 1001,
      name: "Eduardo Santos",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "@eduardo.santos",
    }];
    fixture.detectChanges();
  });

  it('[payment/status-pagamento/resposta-pagamento] Deve verificar se o card foi carregado corretamente', () => {

		expect(compiled.querySelector('#card-list--txt-name-0').textContent.trim()).toBe(component.listItem[0].name);
		expect(compiled.querySelector('#card-list--img-avatar-0').src).toBe(component.listItem[0].img);
		expect(compiled.querySelector('#card-list--txt-id-0').textContent.trim()).toBe('ID: ' + component.listItem[0].id);
		expect(compiled.querySelector('#card-list--txt-username-0').textContent.trim()).toBe('- Username: ' + component.listItem[0].username);

  });
});


