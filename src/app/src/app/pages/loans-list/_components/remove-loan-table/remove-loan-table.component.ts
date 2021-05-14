import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksListRequestService } from '../../../books-list/_services/books-list-request.service';
import { LoansList } from '../../_models/loans-list.models';
import { LoansListRequestService } from '../../_services/loans-list-request.service';

@Component({
  selector: 'app-remove-loan-table',
  templateUrl: './remove-loan-table.component.html',
  styleUrls: ['./remove-loan-table.component.scss']
})
export class RemoveLoanTableComponent implements OnInit {
  @Input() loansList: LoansList = [];
  displayedColumns: string[] = ['remove','title', 'name', 'from', 'to'];
  dataSource: any = null;

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private loansListRequestService: LoansListRequestService,
    private booksListRequestService: BooksListRequestService
  ) { }

  ngOnInit(): void {
    this.updateDataSource();
  }

  ngOnChanges(): void {
    this.updateDataSource();
  }

  updateDataSource() {
    if (this.loansList.length > 0) {
      this.dataSource = new MatTableDataSource(this.loansList);
    }
  }

  onRemoveButtonClick(id: number) {
    this.loansListRequestService.removeLoan(id);
    this.booksListRequestService.getBooksList();
  }

  getFormatedDate(rawDate: string): string {
    const date = new Date(rawDate)
    return date.getDate()  + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }
}
