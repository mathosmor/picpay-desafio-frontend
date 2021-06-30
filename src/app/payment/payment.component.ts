import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../common/models/user';
import { UserService } from '../common/services/user.service';
import { ModalSelectCreditCardComponent } from './modal-select-credit-card/modal-select-credit-card.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  modalStatus: boolean;

  user = {} as User;

  responseUser: any

  users: User[] = [];

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }


  openDialog(dataUser) {
    this.dialog.open(ModalSelectCreditCardComponent, {
      height: '400px',
      width: '600px',
      data: {
        user: dataUser
      }
    });
  }

}
