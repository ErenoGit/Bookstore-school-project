import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducer';
import { LoansList } from './_models/loans-list.models';
import { LoansListRequestService } from './_services/loans-list-request.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {
  loansList: LoansList = [];

  constructor(
    private userListRequestService: LoansListRequestService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userListRequestService.getLoansList();

    this.store
      .pipe(select('loansListReducer'))
      .subscribe(state => {
        this.loansList = state.loansList;
      });
  }

}
