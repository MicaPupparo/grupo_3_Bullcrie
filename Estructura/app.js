const express = require("express");
const { dirname } = require("path");
const path = require("path");
const methodOverride =  require('method-override');
const cookies = require("cookie-parser");
const session = require("express-session");
const rutasMain = require("./routes/main");
const rutasProductos = require("./routes/productos");
const rutasUsers = require("./routes/users");
const usuarioLogueadoMiddleware = require("./middlewares/usuarioLogueadoMiddleware");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session( {secret: "Mensaje secreto",
  resave: false,
  saveUninitialized: false }));

app.use(cookies())

// app.use(usuarioLogueadoMiddleware);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.use("/", rutasMain);

app.use("/productos", rutasProductos);

app.use("/usuarios", rutasUsers);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

