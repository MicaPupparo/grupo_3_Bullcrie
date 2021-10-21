const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  productCart: (req, res) => {
    res.render("productCart.ejs")
  },
  productDetail: (req, res) => {
    res.render("productDetail.ejs")
  },
  productCreate: (req, res) => {
    res.render("productCreate.ejs")
  }
};

module.exports = controller;