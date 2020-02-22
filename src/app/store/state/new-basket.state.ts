import { Purchase } from "../../models/purchase";

export interface NewBasketState {
  purchases: Purchase[];
}

export const initialNewBasketState: NewBasketState = {
  purchases: []
};
