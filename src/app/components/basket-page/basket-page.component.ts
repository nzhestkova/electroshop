import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../../models/product";
import { addProduct } from "../../store/actions/basket.actions";
import { selectProduct } from "../../store/selectors/basket.selectors";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-basket-page",
  templateUrl: "./basket-page.component.html",
  styleUrls: ["./basket-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketPageComponent implements OnInit {
  products: Product[];
  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    const product = new Product(123123, "ghghghg", 12);
    this.store$.dispatch(addProduct(product));
    this.store$.select(selectProduct).subscribe(data => this.products = data);
  }
}
