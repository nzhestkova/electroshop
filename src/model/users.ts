export class Users {
  login: number;
  password: string;
  userName: string;
  constructor(recordBookNumber: number, surname: string, name: string) {
    this.login = recordBookNumber;
    this.password = surname;
    this.userName = name;
  }
}
