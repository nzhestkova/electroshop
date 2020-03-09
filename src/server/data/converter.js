let user = [{
  userID: 123123,
  isAdmin: false,
  username: {
    name: "Auram",
    surname: "Graham",
  },
  login: "aura_aura",
  orders: [123, 145],
  deferredPurchases: [
    {
      product: {
        productID: 1,
        title: "product #1",
        price: 12,
      },
      count: 1
    }
  ]
},
  {
    userID: 123123,
    isAdmin: true,
    username: {
      name: "Mister",
      surname: "Administrator",
    },
    login: "missadmin"
  },
];

const fs = require("fs");
fs.writeFile("./src/server/data/users.json", JSON.stringify(user), (error) => {
  if (error) throw error;
});

