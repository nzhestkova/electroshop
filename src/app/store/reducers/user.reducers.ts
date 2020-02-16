import { LOGIN, LOGOUT, userActions } from "../actions/user.actions";
import { initialUserState, UserState } from "../state/user.state";

export const userReducer = (state: UserState = initialUserState, action: userActions) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case LOGOUT: {
      return initialUserState;
    }
    default: {
      return state;
    }
  }
};
