import { createAction, props } from "@ngrx/store";
import { UserPersonalInfo } from "../../model/user-personal-info";

const LOGIN = "[User] logged in";
const LOGOUT = "[User] logged out";

export const userLogin = createAction(
  LOGIN,
  props<{userInfo: UserPersonalInfo}>(),
);

export const userLogout = createAction(LOGOUT);
