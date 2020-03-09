import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../model/user";
import { BasketStoreService } from "../../services/basket-store/basket-store.service";
import { UserStoreService } from "../../services/user-store/user-store.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.less"]
})
export class RegisterPageComponent implements OnInit {
  constructor(private userService: UserService,
              private userStoreService: UserStoreService,
              private basketStoreService: BasketStoreService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }
  registerForm = new FormGroup({
    fullName: new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ])
    }),
    login: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[A-Za-z_1-9]*[a-zA-Z]+[a-zA-Z0-9_]*$/),
    ]),
    password: new FormGroup({
      newPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(/^[A-Za-z_1-9]*$/),
      ]),
      confirmNewPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(/^[A-Za-z_1-9]*$/),
      ])
    }),
    submit: new FormControl("Зарегистрироваться!")
  });

  userExistError: boolean = true;
  timerForCheck: number;

  enableButton(): void {
    this.userExistError || this.registerForm.invalid
      ? this.registerForm.get("submit").disable()
      : this.registerForm.get("submit").enable();
  }

  timeoutCheck(): void {
    if (this.timerForCheck) {
      clearTimeout(this.timerForCheck);
    }
    this.timerForCheck = setTimeout(this.checkLogin.bind(this), 1000);
  }

  checkLogin(): void {
    this.registerForm.get("submit").disable();
    if (this.registerForm.get("login").invalid) { return; }
    const login = this.registerForm.get("login").value;
    this.userService.loginExistCheck(login).subscribe((data) => {
      this.userExistError = data;
      this.enableButton();
      this.cdr.markForCheck();
    });
    delete this.timerForCheck;
  }

  signUp(): void {
    if (this.registerForm.invalid || this.userExistError) { return; }
    const user = {
      isAdmin: false,
      username: this.registerForm.get("fullName").value,
      login: this.registerForm.get("login").value,
      deferredPurchases: [],
    };
    this.userService.registerUser(user, this.registerForm.get("password.newPassword").value).subscribe(
      (res) => {
        if (!res.status) {
          const userInfo = <User>res.data;
          this.userStoreService.login({
            userID: userInfo.userID,
            isAdmin: userInfo.isAdmin,
            username: userInfo.username,
            login: userInfo.login
          });
          this.router.navigate([""]).then();
        }
      },
    );
  }

  ngOnInit(): void {
    this.registerForm.get("submit").disable();
  }
}
