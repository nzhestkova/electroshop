const express = require("express");
const router = express.Router();

const products = {
  count: 0,
  list: [],
};

const fs = require("fs");
fs.readFile("./src/server/data/products.json", "utf8", (error, data) => {
  if (error) { throw error; }
  data = JSON.parse(data);
  for (let product of data) {
    products.list.push(product);
    products.count += 1;
  }
});

router.get("/", function (request, response) {
  response.send({ status: 0, data: products.list });
  response.end();
});

router.get("/:id", function (request, response) {
  const product = products.list.find(item => item.productID === +request.params.id);
  product
    ? response.send({ status: 0, data: product })
    : response.send({ status: 404 });
  response.end();
});

router.post("/", function (request, response) {
  const product = {
    productID: products.count,
    title: request.body.product.title,
    price: request.body.product.price,
  };
  products.count += 1;
  products.list.push(product);
  response.send({ status: 0, data: product });
  response.end();
});

router.put("/", function (request, response) {
  const product = products.list.find(item => item.productID === request.body.productID);
  if (product) {
    product[request.body.propertyName] = request.body.newValue;
  } else { response.send({ status: 404 }); }
  response.end();
});

router.delete("/:id", function (request, response) {
  const product = products.list.find(item => item.productID === +request.params.id);
  if (product) {
    const userIndex = products.list.indexOf(product);
    products.list.splice(userIndex, 1);
    response.send({status: 0});
  } else { response.send({ status: 404 }) }
  response.end();
});

module.exports = router;
