const express = require("express");
const { dirname } = require("path");
const path = require("path");
const methodOverride =  require('method-override')
const rutasMain = require("./routes/main");
const rutasProductos = require("./routes/productos");
const rutasUsers = require("./routes/users");


const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/user", rutasUsers);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));