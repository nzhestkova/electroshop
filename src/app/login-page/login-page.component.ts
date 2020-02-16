import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private usersService: GetUsersService) {
  }
  loginForm = new FormGroup({
    login: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]*$/),
    ]),
    password: new FormControl("", [
      Validators.required,
    ]),
    submitButton: new FormControl("Войти"),
  });

  validationMessage(control: string): string {
    const errors = this.loginForm.get(control).errors;
    if (errors.required) {
      return `Поле обязательно для заполнения`;
    }
    if (errors.pattern) {
      return `В поле есть недопустимые символы -
       можно использовать только латинские буквы, цифры и знаки подчеркивания`;
    }
    return "";
  }

  enableSubmit(): void {
    if (this.loginForm.valid) {
      this.loginForm.get("submitButton").enable();
    } else {
      console.log(this.loginForm.get("password").errors);
    }
  }

  login(): void {
    const login = this.loginForm.controls["login"].value;
    const password = this.loginForm.controls["password"].value;
    this.usersService.importList(login, password).subscribe((data: User) => {
      if (data) {
        this.router.navigate([`${data.userID}`]).then();
      } else {
        console.log(`Неправильная пара логин-пароль`);
      }
    });
    this.loginForm.get("submitButton").disable();
  }

  ngOnInit(): void {
    this.loginForm.get("submitButton").disable();
  }
}
