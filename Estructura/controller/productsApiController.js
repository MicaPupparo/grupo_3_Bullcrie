const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = { 
    getAllProducts:  async (req, res) => {
        const data = await db.Productos.findAll({
         include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}]
       });
         const count = data.reduce(function(counter, item) {
         const p = item.categorias.dataValues.nombre;
         counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
         console.log(p)
         console.log(item.categorias)
         return counter;
       }, {});

     console.log(count)

      
        
        const products = await db.Productos.findAll({
         attributes: ['id', 'nombre', 'descripcion']
        })
        const newProducts = products.map(objeto => { return ({
           ...objeto.dataValues, 
           detalle: "http://localhost:3000/productos/detalle/" + objeto.id })})

        res.json({count: data.length, ...count, products: newProducts})
     },

     getProducts:  async (req, res) => {
        const data = await db.Productos.findByPk(req.params.id,
         {
            include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}]
          },
         {
            attributes: [
               'id',
               'nombre',
               'precio',
               'cuotas',
               'stock',
               'descripcion']
         })
        res.json({...data.dataValues, imagen: "http://localhost:3000/images/" + data.imagenes[0].nombre})
         
     } 
}


module.exports = controller;

