export class UserPersonalInfo {
  userID: number;
  isAdmin: boolean;
  username: {
    name: string;
    surname: string;
  };
  login: string;
  constructor(userID: number, isAdmin: boolean, login: string,
              username: { name: string; surname: string; }) {
    this.userID = userID;
    this.isAdmin = isAdmin;
    this.login = login;
    this.username = username;
  }
}
