import { Product } from "./product";
import { User } from "./user";

export class Response {
  status: number;
  data: Product[] | Product | User;
}
