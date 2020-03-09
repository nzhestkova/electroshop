const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

const app = express();
const port = 3000;

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.listen(port);
