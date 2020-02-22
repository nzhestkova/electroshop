import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { NewBasketState } from "../state/new-basket.state";

const selectNewBasket = (appState: AppState) => appState.newBasket;

export const selectPurchasesNew = createSelector(selectNewBasket, (state: NewBasketState) => state.purchases);
