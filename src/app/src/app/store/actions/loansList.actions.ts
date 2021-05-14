import { createAction, props } from '@ngrx/store';
import { LoansList } from '../../pages/loans-list/_models/loans-list.models';

export const setLoansListData = createAction('setLoansListData', props<{ loansList: LoansList }>());
