import { createAction, props } from "@ngrx/store";
import { Purchase } from "../../models/purchase";

const ADD_PURCHASE = "[new basket] add purchase";
const REMOVE_PURCHASE = "[new basket] remove purchase";

export const addPurchaseNew = createAction(
  ADD_PURCHASE,
  props<{ purchase: Purchase }>(),
);

export const removePurchaseNew = createAction(
  REMOVE_PURCHASE,
  props<{ purchase: Purchase }>(),
);
