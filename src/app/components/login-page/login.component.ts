import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { UserService } from "../../services/new-user-service/user.service";
import { userLogin } from "../../store/actions/user.actions";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
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

  constructor(private service: UserService,
              private store$: Store<AppState>,
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
    this.service.authorization(login, password).subscribe(
      data => {
        console.log(data);
        if (data.data) {
          this.store$.dispatch(userLogin({userInfo: data.data}));
          this.router.navigate([""]).then();
        } else {
          if (data.error.userPass === false) { this.authorizationErrors.userNotPass = true; }
          if (data.error.userExist === false) { this.authorizationErrors.userNotFound = true; }
          this.cdr.markForCheck();
        }
      },
    );
  }

  ngOnInit(): void {
    this.loginForm.get("submit").disable();
  }
}
