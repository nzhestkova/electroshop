import { Anonymous, User } from "../../models/user";

export interface UserState {
  userInfo: User | Anonymous;
}

export const initialUserState: UserState = {
  // userInfo: {
  //   userID: 1751236,
  //   login: "tulich",
  //   password: "qwertyfly1213",
  //   username: {
  //     name: "William",
  //     surname: "Grey"
  //   },
  //   purchases: [
  //     {
  //       product: {
  //         productID: 1235436,
  //         title: "product #1",
  //         price: 12.35
  //       },
  //       count: 1
  //     },
  //     {
  //       product: {
  //         productID: 1235438,
  //         title: "product #3",
  //         price: 17.33
  //       },
  //       count: 3
  //     },
  //   ]
  // },
  userInfo: {
    username: "Гость",
    purchases: [],
  },
};
