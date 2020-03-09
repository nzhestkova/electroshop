import { Purchase } from "../../model/purchase";

export interface BasketState {
  purchases: Purchase[];
}

export const initialBasketState: BasketState = {
  purchases: [],
};
