import { createReducer, on } from "@ngrx/store";
import { Purchase } from "../../models/product";
import { addPurchase, clearBasket, loadPurchase, removePurchase } from "../actions/basket.actions";
import { initialBasketState } from "../state/basket.state";

export const basketReducer = createReducer(
  initialBasketState,
  on(loadPurchase,
    (state, action) => ({ ...state, purchases: action.purchases })),
  on(addPurchase,
    (state, action) => ({
      ...state,
      // action.purchase значительно облегчит ситуацию
      // state.purchases.includes(action.purchase) ? map : concat
      purchases: state.purchases.find((item: Purchase) => item.product === action.product)
        ? state.purchases.map((item: Purchase) => item.product.productID === action.product.productID
            ? new Purchase(item.product, item.count + action.count)
            : item)
        : state.purchases.concat([new Purchase(action.product, action.count)])
    })),
  on(removePurchase,
    (state, action) => (
      { ...state,
        purchases: state.purchases.filter((item: Purchase) => item.product.productID !== action.product.productID)
      })),
  on(clearBasket, () => initialBasketState),
);
