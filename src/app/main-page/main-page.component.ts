import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "../../models/product";
import { User } from "../../models/user";
import { ProductsService } from "../services/products/products.service";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  username: string;
  userID: string;
  userSubscriber: Subscription;
  productList: Product[] = [];
  productSubscriber: Subscription;
  constructor(private activateRoute: ActivatedRoute,
              private usersService: GetUsersService,
              private productsService: ProductsService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log(this.activateRoute.snapshot);
    if (this.activateRoute.snapshot.params.id) {
      this.userID = `${this.activateRoute.snapshot.params.id}`;
      this.userSubscriber = this.usersService.userByID(this.userID).subscribe((data: User) => {
        if (data) {
          this.username = data.username;
          this.cdr.markForCheck();
        }
      });
    }

    this.productSubscriber = this.productsService.wholeList().subscribe((data: Product[]) => {
      this.productList = data;
      this.cdr.markForCheck();
    });
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
