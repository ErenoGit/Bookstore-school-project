import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListRequestMapperService {

  constructor() { }

  fixDataLabels(requestResults): Object {
    return {
      memberId: requestResults.memberID,
      lastName: requestResults.lastname,
      firstName: requestResults.firstname,
      address: requestResults.address,
      phoneNumber: requestResults.phone_number,
    }
  }
}
