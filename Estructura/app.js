const express = require("express");
const { dirname } = require("path");
const path = require("path");
const rutasMain = require("./routes/main");
const rutasProductos = require("./routes/productos");
const rutasUsers = require("./routes/users");

const app = express();

app.use(express.static('./public'));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/user", rutasUsers);

 app.set("view engine", "ejs");