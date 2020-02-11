import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-personal-information",
  templateUrl: "./personal-information.component.html",
  styleUrls: ["./personal-information.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent implements OnInit {
  constructor(private router: Router) {
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
    sex: new FormControl("", [
      Validators.required,
    ]),
    login: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[A-Za-z_0-9]*$/),
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
    this.router.navigate(["", "register", "contacts"]).then();
  }
  ngOnInit(): void {
    this.registerForm.get("userName.name").setValue("Natasha");
    this.registerForm.get("userName.surname").setValue("Zhestkova");
    this.registerForm.get("login").setValue("natasha");
    this.registerForm.get("password").setValue("qwertyfly1234");
    this.registerForm.get("passwordConfirm").setValue("qwertyfly1234");
  }
}
