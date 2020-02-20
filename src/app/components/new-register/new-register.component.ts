import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { User } from "../../models/user";
import { UserService } from "../../services/new-user-service/user.service";
import { userLogin } from "../../store/actions/user.actions";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-new-register",
  templateUrl: "./new-register.component.html",
  styleUrls: ["./new-register.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRegisterComponent implements OnInit {
  constructor(private store$: Store<AppState>,
              private router: Router,
              private service: UserService,
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
    this.service.checkLogin(login).subscribe((data: boolean) => {
      this.userExistError = data;
      this.enableButton();
      this.cdr.markForCheck();
    });
    delete this.timerForCheck;
  }

  signUp(): void {
    if (this.registerForm.invalid || this.userExistError) { return; }
    const user = new User(this.registerForm.get("login").value,
      this.registerForm.get("password.newPassword").value,
      this.registerForm.get("fullName").value);
    this.service.registerNewUser(user).subscribe(
      data => {
        this.store$.dispatch(userLogin({userInfo: data}));
        this.router.navigate([""]).then();
      },
    );
  }

  ngOnInit(): void {
    this.registerForm.get("submit").disable();
  }

}
