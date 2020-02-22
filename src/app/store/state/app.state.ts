import { BasketState } from "./basket.state";
import { NewBasketState } from "./new-basket.state";
import { UserState } from "./user.state";

export interface AppState {
  user: UserState;
  basket: BasketState;
  newBasket: NewBasketState;
}
