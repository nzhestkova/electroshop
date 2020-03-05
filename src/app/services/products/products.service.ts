import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  url: string = environment.serverURL + "products";
  constructor(private _http: HttpClient) {
  }

  wholeList(): Observable<Object> {
    return this._http.get(this.url).pipe(
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }
}
