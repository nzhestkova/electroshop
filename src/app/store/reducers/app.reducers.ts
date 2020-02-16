import { Action, ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { userReducer } from "./user.reducers";

export const appReducers: ActionReducerMap<AppState, Action> = {
  user: userReducer,
};
