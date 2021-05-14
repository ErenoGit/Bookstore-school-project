export interface Book {
    bookId: number,
    isbn: number,
    title: string,
    author: string,
    publishYear: number,
    category: string,
};

export type BooksList = Book[] | [] ;