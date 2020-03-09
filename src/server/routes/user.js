const express = require('express');
const router = express.Router();

const dataList = {
  users: {
    count: 0,
    list: [],
  },
};

const fs = require("fs");
fs.readFile("./src/server/data/users.json", "utf8", (error, data) => {
  if (error) { throw error; }
  data = JSON.parse(data);
  for (let product of data) {
    dataList.users.list.push(product);
    dataList.users.count += 1;
  }
});

router.get("/", function (request, response) {
  if (request.query.login) {
    const user = dataList.users.list.find((item) => item.login === request.query.login);
    if (user) {
      if (request.query.password) {
        request.query.password === user.password
          ? response.send({
            status: 0, data: {
              userID: user.userID,
              isAdmin: user.isAdmin,
              username: user.username,
              login: user.login,
              deferredPurchases: user.deferredPurchases,
            }
          })
          : response.send({status: 403});
      } else {
        response.send({status: 403});
      }
    } else {
      response.send({status: 404});
    }
  } else { response.send(dataList); }
  response.end();
});

router.post("/", function (request, response) {
  const newUser = {
    userID: dataList.users.count,
    isAdmin: request.body.user.isAdmin,
    username: request.body.user.username,
    login: request.body.user.login,
    password: request.body.password,
    deferredPurchases: request.body.user.deferredPurchases,
  };
  dataList.users.count += 1;
  dataList.users.list.push(newUser);
  response.send({ status: 0, data: {
      userID: newUser.userID,
      isAdmin: newUser.isAdmin,
      username: newUser.username,
      login: newUser.login,
      deferredPurchases: newUser.deferredPurchases,
    } });
  response.end();
});

router.put("/", function (request, response) {
  const user = dataList.users.list.find((item) => item.login === request.body.login);
  if (user) {
    user[request.body.propertyName] = request.body.newValue;
    response.send({
      status: 0,
      data: new UserInfo(user.userID, user.isAdmin, user.username, user.login, user.deferredPurchases),
    });
  } else {
    response.send({status: 404})
  }
  response.end();
});

router.delete("/:id", function (request, response) {
  const id = +request.params.id;
  const user = dataList.users.list.find((item) => item.userID === id);
  if (user) {
    const userIndex = dataList.users.list.indexOf(user);
    dataList.users.list.splice(userIndex, 1);
    response.send({status: 0});
  } else {
    response.send({status: 404});
  }
  response.end();
});

class UserInfo {
  constructor(userID, isAdmin, username, login, deferredPurchases, orders) {
    this.userID = userID;
    this.isAdmin = isAdmin;
    this.username = username;
    this.login = login;
    this.deferredPurchases = deferredPurchases;
    this.orders = orders;
  }
}

module.exports = router;
