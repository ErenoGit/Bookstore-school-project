export interface Loans {
    loanId: number;
    firstName: string;
    lastName : string; 
    title: string;
    loanDate: Date;
    dueDate: Date;
}

export type LoansList = Loans[];