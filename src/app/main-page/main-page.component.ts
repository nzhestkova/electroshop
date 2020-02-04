import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Products } from "../../model/products";
import { Users } from "../../model/users";
import { GetProductsService } from "../services/get-products/get-products.service";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  providers: [GetUsersService, GetProductsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  user: Users = null;
  userID: string;
  userSubscriber: Subscription;
  productList: Products[] = [];
  productSubscriber: Subscription;
  constructor(private activateRoute: ActivatedRoute,
              private usersService: GetUsersService,
              private productsService: GetProductsService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userID = `${this.activateRoute.snapshot.params.id}`;
    if (this.userID) {
      this.userSubscriber = this.usersService.userByID(this.userID).subscribe((data: Users) => {
        if (data) {
          this.user = new Users(data.userID, data.login, data.password, data.username);
          this.cdr.markForCheck();
        }
      });
    }
    this.productSubscriber = this.productsService.wholeList().subscribe((data: Products[]) => {
      this.productList = data;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
    this.productSubscriber.unsubscribe();
  }
}
