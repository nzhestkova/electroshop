import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product, Purchase } from "../../models/product";
import { Anonymous, User } from "../../models/user";
import { UserService } from "../../services/new-user-service/user.service";
import { ProductsService } from "../../services/products/products.service";
import { PurchasesService } from "../../services/purchases/purchases.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  user: User | Anonymous;
  loggedIn: boolean;
  askConfirm: boolean = false;
  productAdding: Product;
  userSubscriber: Subscription;
  productList: Product[] = [];
  productSubscriber: Subscription;
  constructor(private productsService: ProductsService,
              private purchaseService: PurchasesService,
              private userService: UserService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userSubscriber = this.userService.loadUserFromStore().subscribe((user) => this.user = user);
    this.loggedIn = Object.keys(this.user).includes("userID");

    this.productSubscriber = this.productsService.wholeList().subscribe((data: Product[]) => {
      this.productList = data;
      this.cdr.markForCheck();
    });
  }

  askConfirmation(product: Product): void {
    this.askConfirm = true;
    this.productAdding = product;
  }

  answerAction(product: Product, event: { answer: boolean, count: number }): void {
    if (event.answer) { this.addToBasket(product, event.count); }
    this.askConfirm = false;
  }

  addToBasket(product: Product, count: number): void {
    this.purchaseService.addPurchase(new Purchase(product, count));
    console.log(`${product.title} добавлен в корзину`);
  }

  logout(): void {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    if (this.userSubscriber) {
      this.userSubscriber.unsubscribe();
    }

    if (this.productSubscriber) {
      this.productSubscriber.unsubscribe();
    }
  }
}
