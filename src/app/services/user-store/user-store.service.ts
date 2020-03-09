import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Anonymous } from "../../model/anonymous";
import { UserPersonalInfo } from "../../model/user-personal-info";
import { userLogin, userLogout } from "../../store/actions/user.actions";
import { selectUserInfo } from "../../store/selectors/user.selectors";
import { AppState } from "../../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class UserStoreService {
  constructor(private store$: Store<AppState>) {
  }

  adminMode(): Observable<boolean> {
    return this.store$.select(selectUserInfo).pipe(
      map((user) => {
        return user["isAdmin"];
      }),
    );
  }

  loadUserInfo(): Observable<UserPersonalInfo | Anonymous> {
    return this.store$.select(selectUserInfo);
  }

  login(user: UserPersonalInfo): void {
    this.store$.dispatch(userLogin({ userInfo: user}));
  }

  logout(): void {
    this.store$.dispatch(userLogout());
  }
}
