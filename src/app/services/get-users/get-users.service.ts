import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ServerResponseUser } from "../../../model/server-response-user";
import { User } from "../../../model/user";

@Injectable({
  providedIn: "root"
})
export class GetUsersService {
  url = environment.serverURL + "users";
  constructor(private _http: HttpClient) {
  }

  importList(login: string, password: string): Observable<User> {
    return this._http.get<User>(this.url, { params: {login: login, password: password} });
  }

  registerNewUser(newUser: User): Observable<User> {
    return this._http.post<User>(this.url, newUser);
  }

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
