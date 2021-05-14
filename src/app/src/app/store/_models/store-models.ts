import { BooksList } from "../../pages/books-list/_models/books-list.models";
import { LoansList } from "../../pages/loans-list/_models/loans-list.models";
import { UsersList } from "../../pages/users-list/_models/users-list-model";

export interface UsersListStore {
    usersList: UsersList
}

export interface BooksListStore {
    booksList: BooksList
}

export interface LoansListStore {
    loansList: LoansList
}