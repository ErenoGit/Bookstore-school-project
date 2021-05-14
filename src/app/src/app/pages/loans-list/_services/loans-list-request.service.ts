import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLoaderState } from '../../../store/actions/global.actions';
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
    this.setLoader(true, "getLoans");
    this.loansListRequestProviderService.getLoansList()
      .subscribe({
        next: (loansList) => {
          this.store.dispatch(setLoansListData({ loansList }));
          this.setLoader(false, "getLoans");
        },
        error: () => {
          this.setLoader(false, "getLoans");
        }
      });
  }

  removeLoan(id: number) {
    this.setLoader(true, "removeLoans");
    this.loansListRequestProviderService.removeLoan(id)
      .subscribe({
        next: (res) => {
          this.setLoader(false, "removeLoans");
          this.getLoansList();
          
        },
        error: () => {
          this.setLoader(false, "removeLoans");

        }
      });
  }

  addLoan(userId: number, bookId: number, loanDate: Date, dueDate: Date) {
    this.setLoader(true, "addLoans");

    this.loansListRequestProviderService.addLoan(userId, bookId, loanDate, dueDate)
      .subscribe({
        next: (res) => {
          this.getLoansList();
          this.setLoader(false, "addLoans");
        },
        error: () => {
          this.setLoader(false, "addLoans");
        }
      });
  }

  private setLoader(loaderState: boolean, action: string) {
    this.store.dispatch(setLoaderState({
      loaderState,
      action
    }));
  }
}
