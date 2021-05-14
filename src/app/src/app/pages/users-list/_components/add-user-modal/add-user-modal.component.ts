import { Component, OnInit } from '@angular/core';
import { UserListRequestService } from '../../_services/user-list-request.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {
  firstName: string = '';;
  lastName: string = '';;
  phoneNumber: string = '';;
  address: string = '';;
  errorMessage: string = '';

  constructor(
    private userListRequestService: UserListRequestService
  ) {

  }

  ngOnInit(): void {

  }

  onSubmitClick() {
    if (this.firstName.length > 0 && this.lastName.length > 0 && this.phoneNumber.length > 0 && this.address.length > 0) {
      this.userListRequestService.addUser(this.lastName, this.firstName, this.address, this.phoneNumber);
      this.firstName = '';;
      this.lastName = '';;
      this.phoneNumber = '';;
      this.address = '';;
      this.errorMessage = '';
    } else {
      this.errorMessage = "Wprowadź dane!"
    }
  }
}
