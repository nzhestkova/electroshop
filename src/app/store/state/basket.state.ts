import { Purchase } from "../../models/product";

export interface BasketState {
  purchases: Purchase[];
}

export const initialBasketState: BasketState = {
  purchases: [],
};
