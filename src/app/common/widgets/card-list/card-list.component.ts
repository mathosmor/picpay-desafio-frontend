import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input()
  listItem: User;

  @Output() 
  buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buttonClickResponse(item) {
    this.buttonClick.emit({item})
  }

}
