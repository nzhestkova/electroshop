import { createReducer, on } from "@ngrx/store";
import { addPurchaseNew, removePurchaseNew } from "../actions/new-basket.actions";
import { initialNewBasketState } from "../state/new-basket.state";

export const newBasketReducer = createReducer(
  initialNewBasketState,
  on(
    addPurchaseNew,
    (state, action) => ({purchases: state.purchases.concat([action.purchase])})
    ,
  ),
  on(
    removePurchaseNew,
    (state, action) => ({ purchases: state.purchases.concat([action.purchase]) }),
  ),
);
