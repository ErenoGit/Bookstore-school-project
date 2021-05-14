import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLoanModalComponent } from '../add-loan-modal/add-loan-modal.component';

@Component({
  selector: 'app-remove-loan-menu',
  templateUrl: './remove-loan-menu.component.html',
  styleUrls: ['./remove-loan-menu.component.scss']
})
export class RemoveLoanMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddLoanModal() {
    this.dialog.open(AddLoanModalComponent);
  }

}
