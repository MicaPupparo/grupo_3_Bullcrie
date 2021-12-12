const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); //falta cambiar el numero para cuando se edita

const controller = {
  //crear ejs index
  tienda: (req, res) => {
    db.Productos.findAll()
      .then(function(productos){
        res.render('productShop', {productos: productos})
      })
    /*const productos = products
    res.render('productShop', {productos})*/
  },
  categorias: (req, res) => {
    const categoria = req.params.categoria
    const product = products.filter(elemento => elemento.categoria == categoria)
    console.log(product)
    res.render('categorias', {product})
  },

  productCart: (req, res) => {
    res.render("productCart.ejs")
  },
  addToCart: (req, res) => {
    res.send("agregado")
  },
  productDetail: (req, res) => {
    const id = req.params.id
    const product = products.find(elemento => elemento.id == id)
    res.render('productDetail', {product})
  },
  productCreate: (req, res) => {
    res.render("productCreate")
  },
  store: (req, res) => {
    let image
    if(req.files[0] != undefined){
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        image: image
    };
    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('detalle/' + newProduct.id);
  },
  productEdit: (req, res) => {
    const id = req.params.id -1
    const productEdit = products[id]
    res.render('productEdit', { productEdit });
  },
  update: (req, res) => {
    const id = req.params.id -1
    const objeto = req.body
    const objKeys = Object.keys(objeto)
    const newObject = {}
    for (let i = 0; i < objKeys.length; i++){
      if(objeto[objKeys[i]] != ""){
          newObject[objKeys[i]] = objeto[objKeys[i]]
      }
    }

    products[id] = {
      ...products[id],
      ...newObject
    }

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/productos/detalle/' + (id+1))
  },
  destroy : (req, res) => {
    let id = req.params.id;
    let productDelete = products[id];
    let finalProducts = products.filter(product => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
    res.redirect('/');
  }
};


module.exports = controller;