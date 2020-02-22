import { createAction, props } from "@ngrx/store";
import { Purchase } from "../../models/purchase";

const ADD_PURCHASE = "[Basket] add product";
const REMOVE_PURCHASE = "[Basket] remove product";

export const addPurchase = createAction(
  ADD_PURCHASE,
  props<{ purchase: Purchase }>(),
);

export const removePurchase = createAction(
  REMOVE_PURCHASE,
  props<{ purchase: Purchase }>(),
);
