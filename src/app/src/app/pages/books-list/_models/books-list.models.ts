export interface Book {
    bookId: number,
    isbn: number,
    title: string,
    author: string,
    publishYear: number,
    category: string,
    loanId: null | number;
};

export type BooksList = Book[] | [] ;