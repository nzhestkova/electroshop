import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { ServerResponse } from "../../models/server-response-user";
import { Anonymous, User } from "../../models/user";
import { logout } from "../../store/actions/user.actions";
import { selectUserInfo } from "../../store/selectors/user.selectors";
import { AppState } from "../../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = environment.serverURL + "user";
  constructor(private _http: HttpClient,
              private store$: Store<AppState>) {
  }

  allUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.url);
  }
  loadUserFromStore(): Observable<User|Anonymous> {
    return this.store$.select(selectUserInfo);
  }

  authorization(login: string, password: string): Observable<ServerResponse> {
    return this._http.get<ServerResponse>(this.url, {params: { login: login, password: password }});
  }

  checkLogin(login: string): Observable<boolean> {
    return this._http.get<ServerResponse>(this.url, { params: {login: login} }).pipe(
      map(data => {
        return data.error.userExist; }),
      );
  }

  registerNewUser(user: User): Observable<User> {
    return this._http.post<User>(this.url, user);
  }

  logout(): void {
    this.store$.dispatch(logout());
  }

  savePurchases(user: User): void {
    this._http.put(this.url, user);
  }
}
