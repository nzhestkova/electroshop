import { Product } from "../../models/product";
import { Purchase } from "../../models/purchase";

export interface BasketState {
  purchases: Purchase[];
}

export const initialBasketState: BasketState = {
  purchases: [
    new Purchase(new Product(1235436, "product #1", 12.35), 1),
    new Purchase(new Product(1235438, "product #3", 17.33), 3),
  ],
};
