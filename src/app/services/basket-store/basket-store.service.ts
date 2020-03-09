import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "../../model/product";
import { Purchase } from "../../model/purchase";
import { addPurchase, clearBasket, decrementCount, incrementCount, removePurchase } from "../../store/actions/basket.actions";
import { selectPurchases } from "../../store/selectors/basket.selectors";
import { AppState } from "../../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class BasketStoreService {
  constructor(private store$: Store<AppState>) {
  }

  purchasesCount(): Observable<number> {
    return this.store$.select(selectPurchases).pipe(
      map((purchases) => purchases.length),
    );
  }

  addProduct(product: Product, count: number): void {
    this.store$.dispatch(addPurchase({product: product, count: count}));
  }

  removeProduct(productID: number): void {
    this.store$.dispatch(removePurchase({ productID: productID }));
  }

  countIncrement(productID: number): void {
    this.store$.dispatch(incrementCount({ productID: productID }));
  }

  countDecrement(productID: number): void {
    this.store$.dispatch(decrementCount({ productID: productID }));
  }

  loadBasket(): Observable<Purchase[]> {
    return this.store$.select(selectPurchases);
  }

  clearBasket(): void {
    this.store$.dispatch(clearBasket());
  }
}
