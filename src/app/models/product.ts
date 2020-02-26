export class Product {
  productID: number;
  title: string;
  price: number;
  constructor(productID: number, title: string, price: number) {
    this.productID = productID;
    this.title = title;
    this.price = price;
  }
}

export class Purchase {
  product: Product;
  count: number;
  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }
}
