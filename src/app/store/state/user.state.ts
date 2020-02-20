import { User } from "../../models/user";

export interface UserState {
  userInfo: User | {};
}

export const initialUserState: UserState = {
  userInfo: {},
};
