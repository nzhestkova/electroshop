import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Product } from "../../model/product";
import { Response } from "../../model/response";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url: string = environment.url + "/product";
  constructor(private _http: HttpClient) {
  }

  productList(): Observable<Product[]> {
    return this._http.get(this.url).pipe(
      map((data: Response) => (<Product[]>data.data)),
      catchError(err => throwError(err)),
  );
  }
}
