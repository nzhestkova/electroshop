import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../../../model/users";

@Injectable({
  providedIn: "root"
})
export class GetUsersService {
  url: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) {
  }

  importList(login: string, password: string): Observable<Object> {
    return this._http.get(this.url, { params: {login: login, password: password} });
  }

  registerNewUser(newUser: Users): Observable<Object> {
    return this._http.post(this.url, newUser);
  }

  userByID(id: string): Observable<Object> {
    return this._http.get(this.url, { params: {id: `${id}`} });
  }

  updateUserInformation(newUser: Users): Observable<Object> {
    return this._http.put(this.url, newUser);
  }
}
