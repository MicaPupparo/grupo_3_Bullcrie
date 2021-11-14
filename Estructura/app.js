const express = require("express");
const { dirname } = require("path");
const path = require("path");
const methodOverride =  require('method-override')
const rutasMain = require("./routes/main");
const rutasProductos = require("./routes/productos");
const rutasUsers = require("./routes/users");


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/usuarios", rutasUsers);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));