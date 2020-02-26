import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { Purchase } from "../../models/product";
import { PurchasesService } from "../../services/purchases/purchases.service";

@Component({
  selector: "app-basket-page",
  templateUrl: "./basket-page.component.html",
  styleUrls: ["./basket-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPageComponent implements DoCheck {
  purchases: Purchase[];
  totalAmount: number;

  constructor(private service: PurchasesService) {
  }

  removePurchase(purchase: Purchase): void {
    this.service.removePurchase(purchase);
  }

  clearBasket(): void {
    this.service.clearBasket();
  }

  ngDoCheck(): void {
    this.service.loadPurchases().subscribe(data => this.purchases = data);
    this.totalAmount = this.purchases.reduce((sum, current) => sum + current.count * current.product.price, 0);
  }
}
