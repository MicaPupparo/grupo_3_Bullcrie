const path = require("path");

const controller = {
  contacto: (req, res) => {
    res.render("contacto.ejs")
  }
}

module.exports = controller;