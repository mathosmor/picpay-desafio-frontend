import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';




@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  declarations: [
    CardListComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  exports: [
    CardListComponent,
    ButtonComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
