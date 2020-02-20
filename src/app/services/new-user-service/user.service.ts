import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { ServerResponse } from "../../models/server-response-user";
import { User } from "../../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = environment.serverURL + "user";
  constructor(private _http: HttpClient) {
  }

  allUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.url);
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
}
