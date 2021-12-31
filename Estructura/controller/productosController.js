const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); //falta cambiar el numero para cuando se edita

const controller = {
  tienda: (req, res) => {


    db.Productos.findAll({
      include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}]
    })
      .then(function(productos){
        res.render('productShop', {productos: productos})
        console.log(productos.imagenes.imagen_id)
      })
    /*const productos = products
    res.render('productShop', {productos})*/

  },
  categorias: (req, res) => {
    // const categoria = req.params.categoria
    // const product = products.filter(elemento => elemento.categoria == categoria)
    // console.log(product)
    // res.render('categorias', {product})

    db.Productos.findAll({
      where: {
        categoria_id: {
          nombre:  req.params.categoria
        }
      }
    })
    .then(productos =>{
      res.render('categorias', {productos})
    } )
  },

  productCart: (req, res) => {
    res.render("productCart.ejs")
  },
  addToCart: (req, res) => {
    res.send("agregado")
  },
  productDetail: (req, res) => {
    // const id = req.params.id
    // const product = products.find(elemento => elemento.id == id)
    // res.render('productDetail', {product})
    db.Productos.findByPk(req.params.id, {
      include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}]
    })
    .then(productos =>{
      res.render('productDetail', {productos})
    } )
  },

  productCreate: (req, res) => {
        
    db.Talles.findAll()
      .then(function(talles) {
        return res.render("productCreate", {talles:talles})
      })
  },
  
  store: (req, res) => {
    let image
    if(req.files[0] != undefined){
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    // let newProduct = {
    //     id: products[products.length - 1].id + 1,
    //     ...req.body,
    //     image: image
    // };
    // products.push(newProduct)
    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    // res.redirect('detalle/' + newProduct.id);
    db.Productos.create({
      nombre: req.params.nombre,
      categoria_id: {
        nombre: req.params.categoria
      },
      color_id: {
        nombre: req.params.color
      },
      precio: req.params.price,
      cuotas: req.params.cuotas,
      imagen: image,
      stock: req.params.stock,
      descripcion: req.params.descripcion,
      talle: {
        talles: req.params.talle 
      }
      
    }, {
      include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}] 
    })

    res.redirect('productShop')
  },
  productEdit: (req, res) => {
    // const id = req.params.id -1
    // const productEdit = products[id]
    // res.render('productEdit', { productEdit });

    db.Productos.findByPk(req.params.id)
    .then(productEdit => {
      res.render('productEdit', { productEdit })
    })

  },
  update: (req, res) => {
    // const id = req.params.id -1
    // const objeto = req.body
    // const objKeys = Object.keys(objeto)
    // const newObject = {}
    // for (let i = 0; i < objKeys.length; i++){
    //   if(objeto[objKeys[i]] != ""){
    //       newObject[objKeys[i]] = objeto[objKeys[i]]
    //   }
    // }
    // products[id] = {
    //   ...products[id],
    //   ...newObject
    // }
    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    // res.redirect('/productos/detalle/' + (id+1))
    db.Productos.update({
      nombre: req.params.nombre,
      categoria_id: {
        nombre: req.params.categoria
      },
      color_id: {
        nombre: req.params.color
      },
      precio: req.params.price,
      cuotas: req.params.cuotas,
      imagen: image,
      stock: req.params.stock,
      descripcion: req.params.descripcion,
      talle: {
        talles: req.params.talle 
      }
      
    }, {
      include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}] 
    },
    {
      where: {
        id: req.params.id
      }
    })

    res.redirect('productShop')
  },
  destroy : (req, res) => {
    // let id = req.params.id;
    // let productDelete = products[id];
    // let finalProducts = products.filter(product => product.id != id);
    // fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
    // res.redirect('/');

    db.Productos.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('productShop');
  }
};


module.exports = controller;