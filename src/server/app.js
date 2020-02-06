const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.options("*", cors());
const bodyParser = require("body-parser");

const fs = require("fs");
const userList = { list: [] };
const productList = { list: [] };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

fs.readFile("users.json", "utf8", function (error, data) {
  if (error) throw error; // если возникла ошибка
  data = JSON.parse(data);
  for (let record of data) {
    userList.list.push(record);
  }
});

fs.readFile("products.json", "utf8", function (error, data) {
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
  if (request.query.login && request.query.password) {
    const user = userList.list.find(item =>
      item.login === request.query.login && item.password === request.query.password);
    response.send(user);
  } else if (request.query.id) {
    const searchID = +request.query.id;
    const user = userList.list.find(item => item.userID === searchID);
    console.log(user);
    response.send(user);
  } else {
    response.send(userList.list);
  }
  response.end();
});

app.get("/products", function (request, response) {
  response.send(productList.list);
  response.end();
});

app.post("/users", function (request, response) {
  const newUser = request.body;
  userList.list.push(newUser);
  response.send({message: `${newUser.username} added to list`, userID: newUser.userID });
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
