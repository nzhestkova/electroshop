import { Action } from "@ngrx/store";
import { User } from "../../../models/user";

export const LOGIN = "[User] Logged in";
export const LOGOUT = "[User] Logged out";

export class UserLogin implements Action {
  type = LOGIN;
  constructor(public userInfo: User) {
  }
}

export class UserLogout implements Action {
  type = LOGOUT;
  constructor(public userInfo: User) {
  }
}

export type userActions = UserLogin | UserLogout;
