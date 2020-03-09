import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Order } from "../../model/order";
import { Purchase } from "../../model/purchase";
import { Response } from "../../model/response";
import { Username } from "../../model/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = environment.url + "/user";
  constructor(private _http: HttpClient) {
  }

  registerUser(body: { isAdmin: boolean, username: Username, login: string, deferredPurchases: Purchase[] }, password: string): Observable<Response> {
    return this._http.post<Response>(this.url, { user: body, password: password });
  }

  loginRequest(login: string, password: string): Observable<Response> {
    return this._http.get<Response>(this.url, { params: { login: login, password: password } });
  }

  loginExistCheck(login: string): Observable<boolean> {
    return this._http.get<Response>(this.url, {params: { login: login }}).pipe(
      map((res) => {
        return res.status !== 404;
      }),
    );
  }

  editUserInfo(body: { login: string, propertyName: string, newValue: Username | Order[] | Purchase[] }): void {
    this._http.put(this.url, body);
  }

  deleteUserInfo(userID: number): Observable<Response> {
    return this._http.get<Response>(this.url + `/${userID}`);
  }
}
