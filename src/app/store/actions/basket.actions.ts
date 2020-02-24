import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";

const ADD_PRODUCT = "[Basket] product added";
const REMOVE_PRODUCT = "[Basket] product removed";

export const addProduct = createAction(
  ADD_PRODUCT,
  props<Product>(),
);

export const removeProduct = createAction(REMOVE_PRODUCT);
