import {Injectable} from '@angular/core';
import {UserModel} from "./models/user.model";

@Injectable()
export class AuthService {
  currentUser: UserModel | undefined;

  constructor() {
  }

  loginUser(userName: string, password: string) {
    console.log('logged in')
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Carlos',
      lastName: 'Pedro'
    }
  }

  get isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(values: any) {
    if (!this.isAuthenticated) return;
    this.currentUser!.firstName = values['firstName'];
    this.currentUser!.lastName = values['lastName'];

  }
}
