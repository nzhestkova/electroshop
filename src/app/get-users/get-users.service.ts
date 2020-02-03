import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetUsersService {
  url: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) {
  }
  // эта функция будет возвращать объект с сервера, из которого я получу username
  importList(login: string, password: string): object | null {
    this._http.get(this.url, { params: {login: login, password: password} }).subscribe(
      data => console.log(data));
    return null;
  }
}
