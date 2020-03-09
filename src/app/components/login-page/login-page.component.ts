import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../model/user";
import { BasketStoreService } from "../../services/basket-store/basket-store.service";
import { UserStoreService } from "../../services/user-store/user-store.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl("", [
      Validators.required,
    ]),
    password: new FormControl("", [
      Validators.required,
    ]),
    submit: new FormControl("Login"),
  });

  authorizationErrors = {
    userNotPass: false,
    userNotFound: false,
  };

  constructor(private userService: UserService,
              private userStoreService: UserStoreService,
              private basketStoreService: BasketStoreService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  rememberInputs(): void {
    this.loginForm.get("login").markAsPristine();
    this.loginForm.get("password").markAsPristine();
  }

  resetErrorMarkers(): void {
    this.authorizationErrors.userNotFound = false;
    this.authorizationErrors.userNotPass = false;
  }

  inputInfo(): void {
    this.loginForm.valid && this.loginForm.dirty
      ? this.loginForm.get("submit").enable()
      : this.loginForm.get("submit").disable();
  }

  loginUser(): void {
    if (this.loginForm.get("submit").untouched) { this.loginForm.get("submit").markAsTouched(); }
    this.loginForm.get("submit").disable();
    this.resetErrorMarkers();
    this.rememberInputs();

    const login = this.loginForm.get("login").value;
    const password = this.loginForm.get("password").value;
    this.userService.loginRequest(login, password).subscribe(
      res => {
        if (res.status) {
          if (res.status === 404) { this.authorizationErrors.userNotFound = true; }
          if (res.status === 403) { this.authorizationErrors.userNotPass = true; }
          this.cdr.markForCheck();
        } else {
          const user = <User>res.data;
          const userInfo = {
            userID: user.userID,
            isAdmin: user.isAdmin,
            login: user.login,
            username: user.username
          };
          this.userStoreService.login(userInfo);
          const purchases = user.deferredPurchases;
          if (purchases) {for (const purchase of purchases) { this.basketStoreService.addProduct(purchase.product, purchase.count); }}
          this.router.navigate([""]).then();
        }
      },
    );
  }

  ngOnInit(): void {
    this.loginForm.get("submit").disable();
  }
}
