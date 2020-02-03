import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Users } from "../../model/users";
import { GetUsersService } from "../get-users/get-users.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.less"],
  providers: [GetUsersService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnDestroy {
  get user(): Users {
    return this._user;
  }

  set user(value: Users) {
    this._user = value;
    console.log(this.user);
  }
  private _user: Users = null;
  userID: string;
  userSubscriber: Subscription;
  constructor(private activateRoute: ActivatedRoute, private usersService: GetUsersService) {
    this.userID = `${this.activateRoute.snapshot.params.id}`;
    if (this.userID) {
      this.userSubscriber = this.usersService.userByID(this.userID).subscribe((data: Users) => {
        this.user = new Users(data.userID, data.login, data.password, data.username);
      });
    }
  }

  test(): void {
    // setInterval(() => console.log(this.user), 1000);
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }
}
