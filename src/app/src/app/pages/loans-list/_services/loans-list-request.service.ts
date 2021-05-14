import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar
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
          this.snackBar.open("Wypożyczenie usunięte!", '', {
            duration: 3000
          });
        },
        error: () => {
          this.setLoader(false, "removeLoans");
          this.snackBar.open("Nie udało się usunać wypożyczenia!", '', {
            duration: 3000
          });
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
          this.snackBar.open("Wypożyczenie dodane!", '', {
            duration: 3000
          });
        },
        error: () => {
          this.setLoader(false, "addLoans");
          this.snackBar.open("Nie udało się dodać wypożyczenia!", '', {
            duration: 3000
          });
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
