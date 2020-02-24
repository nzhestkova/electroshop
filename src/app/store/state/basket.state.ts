import { Product } from "../../models/product";

export interface BasketState {
  product: Product[];
}

export const initialBasketState: BasketState = {
  product: [],
};
