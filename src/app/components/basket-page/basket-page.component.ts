import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "../../model/product";
import { Purchase } from "../../model/purchase";
import { BasketStoreService } from "../../services/basket-store/basket-store.service";

@Component({
  selector: "app-basket-page",
  templateUrl: "./basket-page.component.html",
  styleUrls: ["./basket-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPageComponent implements OnInit, OnDestroy {
  constructor(private basketStoreService: BasketStoreService,
              private cdr: ChangeDetectorRef) {
  }
  purchaseList: Purchase[];
  purchaseSubscriber: Subscription;

  askConfirmationForPurchase: boolean = false;
  askConfirmationForClear: boolean = false;
  chosenProduct: Product;

  totalAmount: number;

  displayPopupPurchase(product: Product): void {
    this.askConfirmationForPurchase = true;
    this.chosenProduct = product;
  }

  displayPopupBasketToggle(): void {
    this.askConfirmationForClear = !this.askConfirmationForClear;
  }

  removePurchase(): void {
    this.basketStoreService.removeProduct(this.chosenProduct.productID);
    this.hidePopupPurchase();
  }

  countIncrement(purchase: Purchase): void {
    if (purchase.count < 30) {
      this.basketStoreService.countIncrement(purchase.product.productID);
    }
  }

  countDecrement(purchase: Purchase): void {
    if (purchase.count > 1) {
      this.basketStoreService.countDecrement(purchase.product.productID);
    }
    if (purchase.count === 1) {
      this.displayPopupPurchase(purchase.product);
    }
  }

  clearBasket(): void {
    this.basketStoreService.clearBasket();
    this.displayPopupBasketToggle();
  }

  hidePopupPurchase(): void {
    this.askConfirmationForPurchase = false;
    delete this.chosenProduct;
  }

  ngOnInit(): void {
    this.purchaseSubscriber = this.basketStoreService.loadBasket().subscribe(
      purchases => {
        this.purchaseList = purchases;
        this.totalAmount = this.purchaseList.reduce(
          (sum, current) => sum + current.count * current.product.price, 0,
        );
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.purchaseSubscriber.unsubscribe();
  }
}
