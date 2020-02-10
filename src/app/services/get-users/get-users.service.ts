import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
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

  userByID(id: string): Observable<User> {
    return this._http.get<User>(this.url, { params: {id: `${id}`} }).pipe(map((data: User) => {
      return data;
      },
    ));
  }

  updateUserInformation(newUser: User): Observable<User> {
    return this._http.put<User>(this.url, newUser);
  }
}
