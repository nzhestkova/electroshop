export class Product {
  productID: number;
  title: string;
  price: number;
  constructor(productID: number, title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}
