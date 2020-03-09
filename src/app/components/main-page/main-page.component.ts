import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "../../model/product";
import { BasketStoreService } from "../../services/basket-store/basket-store.service";
import { ProductService } from "../../services/products/product.service";
import { UserStoreService } from "../../services/user-store/user-store.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService,
              private userStoreService: UserStoreService,
              private basketStoreService: BasketStoreService,
              private cdr: ChangeDetectorRef) {
  }

  errorMark: boolean;
  adminMode: boolean = false;

  askConfirmation: boolean = false;
  chosenProduct: Product;

  productList: Product[];
  productSubscriber: Subscription;

  displayPopup(product: Product): void {
    this.askConfirmation = true;
    this.chosenProduct = product;
  }

  addProduct(count: number): void {
    this.basketStoreService.addProduct(this.chosenProduct, count);
    this.hidePopup();
  }

  hidePopup(): void {
    this.askConfirmation = false;
    delete this.chosenProduct;
  }

  ngOnInit(): void {
    this.productSubscriber = this.productService.productList().subscribe(
      products => {
        this.productList = products;
        this.errorMark = false;
        this.cdr.markForCheck();
      },
      () => {
        this.errorMark = true;
        this.cdr.markForCheck();
      });
    this.userStoreService.adminMode().subscribe(
      mode => {
        this.adminMode = mode;
        this.cdr.markForCheck();
        },
    );
  }

  ngOnDestroy(): void {
    this.productSubscriber.unsubscribe();
  }
}
