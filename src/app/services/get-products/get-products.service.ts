import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetProductsService {
  url: string = "http://localhost:3000/products";
  constructor(private _http: HttpClient) {
  }

  wholeList(): Observable<Object> {
    return this._http.get(this.url);
  }
}
