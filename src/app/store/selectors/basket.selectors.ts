import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { BasketState } from "../state/basket.state";

const selectBasket = (appState: AppState) => appState.basket;

export const selectPurchases = createSelector(selectBasket, (state: BasketState) => state.purchases);
