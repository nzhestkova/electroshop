import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { userReducer } from "./user.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer,
};
