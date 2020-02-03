import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

  userByID(id: string): Observable<Object> {
    return this._http.get(this.url, { params: {id: `${id}`} });
  }
}
