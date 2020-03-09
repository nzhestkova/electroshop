import { Order } from "./order";
import { Purchase } from "./purchase";

export class User {
  userID: number;
  isAdmin: boolean;
  username: {
    name: string;
    surname: string;
  };
  login: string;
  orders: Order[];
  deferredPurchases: Purchase[];

  constructor(userID: number, isAdmin: boolean, username: { name: string, surname: string }, login: string) {
    this.userID = userID;
    this.isAdmin = isAdmin;
    this.username = username;
    this.login = login;
    this.orders = [];
    this.deferredPurchases = [];
  }
}

export class Username {
  name: string;
  surname: string;
}
