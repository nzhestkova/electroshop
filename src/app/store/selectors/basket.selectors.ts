import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { BasketState } from "../state/basket.state";

const selectPurchase = (appState: AppState) => appState.purchase;

export const selectProduct = createSelector(selectPurchase, (state: BasketState) => state.product);
