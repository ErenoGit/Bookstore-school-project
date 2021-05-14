import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLoansListData } from '../../../store/actions/loansList.actions';
import { AppState } from '../../../store/reducer';
import { LoansListRequestProviderService } from './loans-list-request-provider.service';

@Injectable({
  providedIn: 'root'
})
export class LoansListRequestService {
  constructor(
    private loansListRequestProviderService: LoansListRequestProviderService,
    private readonly store: Store<AppState>,
  ) { }

  getLoansList(): void {
    this.loansListRequestProviderService.getLoansList()
      .subscribe(loansList => {
        this.store.dispatch(setLoansListData({ loansList }));
      });
  }

  removeLoan(id: number) {
    this.loansListRequestProviderService.removeLoan(id)
      .subscribe({
        next: (res) => {
          this.getLoansList();
        },
        error: () => {

        }
      });
  }

  addLoan(userId: number, bookId: number, loanDate: Date, dueDate: Date) {
    this.loansListRequestProviderService.addLoan(userId, bookId, loanDate, dueDate)
      .subscribe({
        next: (res) => {
          this.getLoansList();
        },
        error: () => {

        }
      });
  }
}
