import { anonymous, Anonymous } from "../../model/anonymous";
import { UserPersonalInfo } from "../../model/user-personal-info";

export interface UserState {
  userInfo: UserPersonalInfo | Anonymous;
}

export const initialUserState: UserState = {
  userInfo: anonymous,
};
