import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Users } from "../../model/users";
import { GetUsersService } from "../services/get-users/get-users.service";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.less"],
  providers: [GetUsersService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent implements DoCheck, OnDestroy {
  editMode: boolean = false;
  user: Users = null;
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
  constructor(private usersService: GetUsersService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef) {
    this.userID = `${this.activateRoute.snapshot.params.id}`;
  }

  changePassword(): void {
    console.log("Success");
  }

  ngDoCheck(): void {
    if (this.userID) {
      this.userSubscriber = this.usersService.userByID(this.userID).subscribe((data: Users ) => {
        data ? this.user = new Users(data.userID, data.login, data.password, data.username) : this.router.navigate(["/"]);
        this.cdr.markForCheck();
      });
    }
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

  back(): string {
    console.log(this.activateRoute.snapshot.url);
    return "";
    // this.router.navigate([""]);
  }
}
