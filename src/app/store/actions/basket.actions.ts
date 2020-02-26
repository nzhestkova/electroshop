import { createAction, props } from "@ngrx/store";
import { Purchase } from "../../models/product";

const LOAD_PURCHASES = "[Basket] purchases loaded";
const ADD_PURCHASE = "[Basket] purchase added";
const REMOVE_PURCHASE = "[Basket] purchase removed";
const CLEAR_BASKET = "[Basket] all purchases removed";

export const loadPurchase = createAction(
  LOAD_PURCHASES,
  props<{ purchases: Purchase[] }>(),
);

export const addPurchase = createAction(
  ADD_PURCHASE,
  props<Purchase>(),
);

export const removePurchase = createAction(
  REMOVE_PURCHASE,
  props<Purchase>(),
);

export const clearBasket = createAction(CLEAR_BASKET);
