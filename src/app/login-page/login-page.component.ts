import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GetUsersService } from "../get-users/get-users.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.less"],
  providers: [GetUsersService],
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
    if (this.loginForm.valid) {
      const login = this.loginForm.controls["login"].value;
      const password = this.loginForm.controls["password"].value;
      const serverAnswer = this.usersService.importList(login, password);
      console.log(serverAnswer);
      if (serverAnswer) {
        this.router.navigate([`welcome/${this.loginForm.controls["login"].value}`]).then();
        return;
      }
      console.log(`Несуществующая пара - логин и пароль`);
    }
  }
}
