import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ServerResponseUser } from "../../../../models/server-response-user";
import { GetUsersService } from "../../../services/get-users/get-users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private userService: GetUsersService,
              private cdr: ChangeDetectorRef) {
  }

  loginForm = new FormGroup({
    login: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^[A-Za-z_1-9]*[a-zA-Z]+[a-zA-Z0-9_]*$/),
    ])
  });

  checkResult: { userExist: boolean };
  timerID: number;
  @Output() usersNewLogin = new EventEmitter<string>();

  timeoutCheck(): void {
    if (this.checkResult) {
      delete this.checkResult;
    }
    if (this.timerID) {
      clearTimeout(this.timerID);
    }
    if (this.loginForm.get("login").invalid) {
      this.usersNewLogin.emit("");
    } else {
      this.timerID = setTimeout(this.checkLogin.bind(this), 1000);
    }
  }

  checkLogin(): void {
    this.userService.checkLogin(this.loginForm.get("login").value).subscribe((data: ServerResponseUser) => {
      this.checkResult = {userExist: data.userExist};
      if (!data.userExist) {
        this.usersNewLogin.emit(this.loginForm.get("login").value);
      } else {
        this.usersNewLogin.emit("");
      }
      this.cdr.markForCheck();
    });
    delete this.timerID;
  }

  ngOnInit(): void {
  }

}
