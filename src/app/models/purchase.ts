import { Product } from "./product";

export class Purchase {
  product: Product;
  count: number;
  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }
}
