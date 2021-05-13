export interface Book {
    id: number,
    isbn: number,
    title: string,
    author: string,
    year: number,
    category: string,
};

export type BooksList = Book[] | [] ;