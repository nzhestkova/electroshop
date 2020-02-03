export class Users {
  userID: number;
  login: string;
  password: string;
  username: string;
  constructor(userID: number, login: string, surname: string, name: string) {
    this.userID = userID;
    this.login = login;
    this.password = surname;
    this.username = name;
  }
}
