import {Right} from './right';

export class User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  right: Right;

  constructor(id: number, userName: string, firstName: string, lastName: string, right: Right) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.right = right;
  }
}


