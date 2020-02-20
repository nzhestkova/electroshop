import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { User } from "../../models/user";
import { logout } from "../../store/actions/user.actions";
import { selectUserInfo } from "../../store/selectors/user.selectors";
import { AppState } from "../../store/state/app.state";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  user: User | {};
  userID: string;
  userSubscriber: Subscription;
  passwordChangeForm = new FormGroup({
    currentPassword: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ]),
    newPassword: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ]),
    confirmNewPassword: new FormControl("", [
      Validators.required,
      Validators.min(8),
    ]),
    },
  );
  constructor(private store$: Store<AppState>,
              private router: Router) {
  }

  changePassword(): void {
    console.log("Success");
  }

  logout(): void {
    this.store$.dispatch(logout());
    this.router.navigate([""]).then();
  }

  ngOnInit(): void {
    this.userSubscriber = this.store$.select(selectUserInfo).subscribe(
      data => {
        Object.keys(data).length
        ? this.user = data
        : this.router.navigate(["", "login"]);
      });
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }
}
