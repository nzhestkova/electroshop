const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

const fs = require("fs");
const userList = { list: [] };

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

app.get("/", function (request, response) {
  response.send(`Server on port ${port}`);
  response.end();
});

app.get("/users", function (request, response) {
  if (request.query) {
    const user = userList.list.find(item =>
      item.login === request.query.login && item.password === request.query.password);
    response.send(user);
    response.end();
  } else {
    response.send(userList.list);
    response.end();
  }
});

app.get("/products", function (request, response) {
  response.end();
});

app.post("/", function (request, response) {
  const newUser = request.body;
  userList.list.push(newUser);
  response.send(`${newUser} added to list`);
  response.end();
});

app.listen(port);
