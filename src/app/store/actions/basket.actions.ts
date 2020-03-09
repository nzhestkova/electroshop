import { createAction, props } from "@ngrx/store";
import { Product } from "../../model/product";

const ADD_PURCHASE = "[BASKET] added purchase";
const REMOVE_PURCHASE = "[BASKET] remove purchase";
const INCREMENT_COUNT = "[BASKET] product count edited (increment)";
const DECREMENT_COUNT = "[BASKET] product count edited (decrement)";
const CLEAR = "[BASKET] cleared";

export const addPurchase = createAction(
  ADD_PURCHASE,
  props<{ product: Product, count: number }>(),
);

export const removePurchase = createAction(
  REMOVE_PURCHASE,
  props<{ productID: number }>(),
);

export const incrementCount = createAction(
  INCREMENT_COUNT,
  props<{ productID: number }>(),
);

export const decrementCount = createAction(
  DECREMENT_COUNT,
  props<{ productID: number }>(),
);

export const clearBasket = createAction(CLEAR);
