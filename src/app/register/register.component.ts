import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { User } from "../../models/user";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit, OnDestroy{
  private userSubscriber: Subscription;
  constructor(private router: Router,
              private userService: GetUsersService) {
  }

  registerForm = new FormGroup({
    userName: new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ]),
      surname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-zА-Яа-я]*$/),
      ]),
    }),
    login: new FormControl("", [
      Validators.required,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ])
  });

  register(): void {
    if (this.registerForm.valid) {
      const userInfo = new User(this.registerForm.get("login").value, this.registerForm.get("password").value,
        `${this.registerForm.get("userName.name").value} ${this.registerForm.get("userName.surname").value}`);
      this.userSubscriber = this.userService.registerNewUser(userInfo).subscribe((data: User) => {
        this.router.navigate(["", `${data.userID}`]).then();
      });
    }
  }

  ngOnInit(): void {
    this.registerForm.get("userName.name").setValue("Natasha");
    this.registerForm.get("userName.surname").setValue("Zhestkova");
    this.registerForm.get("password").setValue("qwertyfly1234");
    this.registerForm.get("passwordConfirm").setValue("qwertyfly1234");
  }

  ngOnDestroy(): void {
    if (this.userSubscriber) { this.userSubscriber.unsubscribe(); }
  }
}
