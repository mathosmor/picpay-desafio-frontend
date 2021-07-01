import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { CardListComponent } from './card-list.component';

fdescribe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let compiled;

  const user = {
    id: 1001,
    name: "Eduardo Santos",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    username: "@eduardo.santos",
  }

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
    // component.listItem = user;
    fixture.detectChanges();
  });

  it('[payment/status-pagamento/resposta-pagamento] Deve verificar se a resposta foi exibida corretamente', async () => {
    // const name = compiled.querySelector('#card-list--txt-name-0');

    // name.value = 'Eduardo Santos';

    // console.info(name)
    

    // fixture.detectChanges();

    // expect(component.listItem.name).toBe(name.value);

    // expect(component.response).toBe(response.value);
  });
});


