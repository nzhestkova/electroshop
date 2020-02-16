import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ServerResponseUser } from "../../../models/server-response-user";
import { User } from "../../../models/user";
import { AppState } from "../../store/state/app.state";

@Injectable({
  providedIn: "root"
})
export class GetUsersService {
  url = environment.serverURL + "users";
  constructor(private _http: HttpClient,
              private _store: Store<AppState>) {
  }

  importList(login: string, password: string): Observable<User> {
    return this._http.get<User>(this.url, { params: {login: login, password: password} });
  }

  registerNewUser(newUser: User): Observable<User> {
    return this._http.post<User>(this.url, newUser);
  }

  // для проверки логина на уникальность
  checkLogin(login: string): Observable<ServerResponseUser> {
    return this._http.get<ServerResponseUser>(this.url, { params: {login: `${login}`} });
  }

  userByID(id: string): Observable<User> {
    return this._http.get<User>(this.url, { params: {id: `${id}`} });
  }

  updateUserInformation(newUser: User): Observable<User> {
    return this._http.put<User>(this.url, newUser);
  }
}
