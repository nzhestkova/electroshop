import { BasketState } from "./basket.state";
import { UserState } from "./user.state";

export interface AppState {
  user: UserState;
  purchase: BasketState;
}
