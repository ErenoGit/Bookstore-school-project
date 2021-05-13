interface User {
    memberId: number,
    lastName: string,
    firstName: string,
    address: string,
    phoneNumber: number
};

export type UsersList = User[] | [];