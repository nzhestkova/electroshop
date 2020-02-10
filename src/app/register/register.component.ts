import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../model/user";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private usersService: GetUsersService) {
  }
  registerForm = new FormGroup({
    userName: new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.min(2),
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.min(2),
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ]),
    }),
    login: new FormControl("", [
      Validators.required,
      Validators.min(4),
      Validators.pattern(/^[A-Za-z_0-9]*$/),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ]),
    passwordConfirm: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ])
  });

  register(): void {
    if (this.registerForm.valid) {
      console.log("it's okay!");
      const body = new User(1671677, this.registerForm.get("login").value,
        this.registerForm.get("password").value, `${this.registerForm.get("userName.name").value} ${this.registerForm.get("userName.surname").value}`);
      this.usersService.registerNewUser(body).subscribe((data) => {
        this.router.navigate([`${data.userID}`]).then();
      });
    }
  }
  ngOnInit(): void {
    this.registerForm.get("userName.name").setValue("Natasha");
    this.registerForm.get("userName.surname").setValue("Zhestkova");
    this.registerForm.get("login").setValue("natasha");
    this.registerForm.get("password").setValue("qwertyfly1234");
    this.registerForm.get("passwordConfirm").setValue("qwertyfly1234");
  }
}
