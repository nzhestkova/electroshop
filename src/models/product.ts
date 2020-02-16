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
