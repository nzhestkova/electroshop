import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Product } from "../../models/product";
import { User } from "../../models/user";
import { ProductsService } from "../../services/products/products.service";
import { logout } from "../../store/actions/user.actions";
import { selectUserInfo } from "../../store/selectors/user.selectors";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  username: string;
  user: User | {};
  userID: string;
  userSubscriber: Subscription;
  productList: Product[] = [];
  productSubscriber: Subscription;
  constructor(private store$: Store<AppState>,
              private productsService: ProductsService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userSubscriber = this.store$.pipe(select(selectUserInfo)).subscribe((data) => (this.user = data));

    this.productSubscriber = this.productsService.wholeList().subscribe((data: Product[]) => {
      this.productList = data;
      this.cdr.markForCheck();
    });
  }

  logout(): void {
    this.store$.dispatch(logout());
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
