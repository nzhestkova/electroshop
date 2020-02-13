const rsa = require("js-crypto-rsa");

const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.options("*", cors());
const bodyParser = require("body-parser");

const fs = require("fs");

const dataList = {
  users: {
    count: 178356794,
    list: []
  },
  products: []
};

const userList = { list: [] };
const productList = { list: [] };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

fs.readFile("./src/server/users.json", "utf8", function (error, data) {
  if (error) throw error; // если возникла ошибка
  data = JSON.parse(data);
  for (let record of data) {
    userList.list.push(record);
  }
});

fs.readFile("./src/server/products.json", "utf8", function (error, data) {
  if (error) throw error; // если возникла ошибка
  data = JSON.parse(data);
  for (let record of data) {
    productList.list.push(record);
  }
});

app.get("/", function (request, response) {
  response.send(`Server on port ${port}`);
  response.end();
});

app.get("/users", function (request, response) {
  if (request.query.login) {
    const login = request.query.login;
    const currentUser = userList.list.find(item => item.login === login);
    if (currentUser) {
      if (request.query.password) {
        const password = request.query.password;
        if (password === currentUser.password) {
          response.send( { userExist: true, userPassControlID: currentUser.userID } );
        } else { response.send( {userExist: true, userPassControlID: false} ) }
      } else { response.send( { userExist: true } ) }
    } else { response.send( {userExist: false} ) }
  } else if (request.query.id) {
    const searchID = +request.query.id;
    const user = userList.list.find(item => item.userID === searchID);
    user ? response.send(user) : response.send({ message: "User not found" });
  } else { response.send(userList.list) }
  response.end();
});

app.get("/products", function (request, response) {
  response.send(productList.list);
  response.end();
});

// для регистрации пользователей
app.post("/users", function (request, response) {
  const newUser = request.body;
  dataList.users.count += 1;
  newUser.userID = dataList.users.count;
  userList.list.push(newUser);
  response.send(newUser);
  response.end();
});

app.put("/users", function (request, response) {
  const newUser = request.body;
  const currentInfo = userList.list.find(item => item.userID === newUser.userID);
  currentInfo.username = newUser.username;
  response.send({message: "Complete!"});
  response.end();
});

app.listen(port);
