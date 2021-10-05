const path = require("path");

const controller = {
  productCart: (req, res) => {
    res.render("productCart.ejs")
  },
  productDetail: (req, res) => {
    res.render("productDetail.ejs")
  }
}

module.exports = controller;