import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { environment } from "../environments/environment";
import { User } from "./model/user";
import { UserPersonalInfo } from "./model/user-personal-info";
import { BasketStoreService } from "./services/basket-store/basket-store.service";
import { UserStoreService } from "./services/user-store/user-store.service";
import { UserService } from "./services/user/user.service";
import { AppState } from "./store/state/app.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  url: string = environment.url + "/user";

  constructor(private userService: UserService,
              private userStoreService: UserStoreService,
              private basketStoreService: BasketStoreService,
              private store$: Store<AppState>,
              private _http: HttpClient) {
  }

  userInfo: UserPersonalInfo;
  userSubscriber: Subscription;

  purchasesCount: Observable<number>;

  register(): void {
    const newUser = new User(123123, false, { name: "No", surname: "Admin" }, "tulich");
    const password = "qwerty";
    this._http.post(this.url, { user: newUser, password: password }).subscribe(
        (data) => console.log(data),
    );
  }

  delete(): void {
    this._http.delete(this.url + "/0").subscribe(data => console.log(data));
  }

  logoutUser(): void {
    const subscriber = this.basketStoreService.loadBasket().subscribe(
      (purchases) => {
        const body = { login: this.userInfo.login, propertyName: "deferredPurchases", newValue: purchases };
        this.userService.editUserInfo(body);
      },
    );
    subscriber.unsubscribe();

    this.userStoreService.logout();
    this.basketStoreService.clearBasket();
    delete this.userInfo;
  }

  ngOnInit(): void {
    this.userSubscriber = this.userStoreService.loadUserInfo().subscribe(user => {
      if (Object.keys(user).length > 1) { this.userInfo = <UserPersonalInfo>user; }
    });

    this.purchasesCount = this.basketStoreService.purchasesCount();
    // this.userService.loginRequest("aura_aura", "qwerty").subscribe(
    //   (res ) => {
    //     const user = <User>res.data;
    //     this.userStoreService.login(<User>res.data);
    //     for (const purchase of user.deferredPurchases) {
    //       this.basketStoreService.addProduct(purchase.product, purchase.count);
    //     }
    //   },
    // );
  }
  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }
}
