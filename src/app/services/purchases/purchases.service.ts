import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Purchase } from "../../models/product";
import { addPurchase, clearBasket, loadPurchase, removePurchase } from "../../store/actions/basket.actions";
import { selectPurchases } from "../../store/selectors/basket.selectors";
import { AppState } from "../../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class PurchasesService {
  url = environment.serverURL + "user";
  constructor(private store$: Store<AppState>) {
  }
  loadOnStore(purchases: Purchase[]): void {
    this.store$.dispatch(loadPurchase({ purchases: purchases }));
  }
  addPurchase(purchase: Purchase): void {
    this.store$.dispatch(addPurchase(purchase));
  }
  removePurchase(purchase: Purchase): void {
    this.store$.dispatch(removePurchase(purchase));
  }
  clearBasket(): void {
    this.store$.dispatch(clearBasket());
  }
  loadPurchases(): Observable<Purchase[]> {
    return this.store$.select(selectPurchases);
  }
}
