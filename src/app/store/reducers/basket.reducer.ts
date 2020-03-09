import { createReducer, on } from "@ngrx/store";
import { addPurchase, clearBasket, decrementCount, incrementCount, removePurchase } from "../actions/basket.actions";
import { initialBasketState } from "../state/basket.state";

export const basketReducer = createReducer(
  initialBasketState,
  on(addPurchase, (state, action) => ({
    ...state,
    purchases: state.purchases.find(purchase => purchase.product.productID === action.product.productID)
      ? state.purchases.map(purchase => purchase.product.productID === action.product.productID
        ? { product: purchase.product, count: purchase.count + action.count }
        : purchase)
      : state.purchases.concat([{ product: action.product, count: action.count }])
  })),
  on(removePurchase, (state, action) => ({
    ...state,
    purchases: state.purchases.filter(item => item.product.productID !== action.productID),
  })),
  on(incrementCount, (state, action) => ({
    ...state,
    purchases: state.purchases.map(
      purchase => purchase.product.productID === action.productID
        ? { product: purchase.product, count: purchase.count + 1 }
        : purchase)
  })),
  on(decrementCount, (state, action) => ({
    ...state,
    purchases: state.purchases.map(
      purchase => purchase.product.productID === action.productID
        ? { product: purchase.product, count: purchase.count - 1 }
        : purchase)
  })),
  on(clearBasket, () => initialBasketState),
);
