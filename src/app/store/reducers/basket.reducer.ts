import { createReducer, on } from "@ngrx/store";
import { Purchase } from "../../models/purchase";
import { addPurchase, removePurchase } from "../actions/basket.actions";
import { initialBasketState } from "../state/basket.state";

export const basketReducer = createReducer(
  initialBasketState,
  on(addPurchase, (state, action) => ({
      ...state,
      purchases: add(action.purchase, state.purchases)
    })),
  on(removePurchase, (state, action) => ({
    ...state,
    purchases: state.purchases.concat([action.purchase])
  })),
);

function add(purchase: Purchase, purchaseList: Purchase[]): Purchase[] {
  purchaseList.push(purchase);
  return purchaseList;
}
