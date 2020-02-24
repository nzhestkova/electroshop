import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product";
import { addProduct, removeProduct } from "../actions/basket.actions";
import { initialBasketState } from "../state/basket.state";

export const basketReducer = createReducer(
  initialBasketState,
  on(
    addProduct,
    (state, action) => ({
      ...state,
      product: state.product.concat([new Product(action.productID, action.title, action.price)]),
    }),
  ),
  on(removeProduct, () => initialBasketState),
);
