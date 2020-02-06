import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Users } from "../../model/users";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  constructor(private router: Router, private usersService: GetUsersService) {
  }
  loginForm = new FormGroup({
    login: new FormControl("", [
      Validators.required,
      Validators.min(4),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ])
  });

  login(): void {
    const login = this.loginForm.controls["login"].value;
    const password = this.loginForm.controls["password"].value;
    this.usersService.importList(login, password).subscribe((data: Users) => {
      if (data) {
        this.router.navigate([`${data.userID}`]).then();
      } else {
        console.log(`Неправильная пара логин-пароль`);
      }
    });
  }
}
