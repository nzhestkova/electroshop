import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Purchase } from "../../models/purchase";
import { addPurchaseNew } from "../../store/actions/new-basket.actions";
import { selectPurchasesNew } from "../../store/selectors/new-basket.selectors";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent implements OnInit, OnDestroy {
  purchasesList: Purchase[];
  purchaseSubscriber: Subscription;
  constructor(private store$: Store<AppState>) {
  }

  removePurchase(): void {
    console.log(this.purchasesList);
    this.store$.dispatch(addPurchaseNew({ purchase: new Purchase(1234323, 12) }));
  }

  ngOnInit(): void {
    this.purchaseSubscriber = this.store$.select(selectPurchasesNew).subscribe(data => this.purchasesList = data);
  }

  ngOnDestroy(): void {
    this.purchaseSubscriber.unsubscribe();
  }

}
