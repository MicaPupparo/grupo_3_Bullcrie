const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = { 
    getAllProducts:  async (req, res) => {
        const data = await db.Productos.findAll();
        const category1 = await data.filter(x => x.categoria_id == 1)
        const category2 = await data.filter(x => x.categoria_id == 2)
        const category3 = await data.filter(x => x.categoria_id == 3)
        const category4 = await data.filter(x => x.categoria_id == 4)
        const products = await db.Productos.findAll({
         attributes: ['id', 'nombre', 'descripcion']
        })
        const newProducts = products.map(objeto => { return ({
           ...objeto.dataValues, 
           detalle: "http://localhost:3000/productos/detalle/" + objeto.id })})

        res.json({count: data.length, Buzos: category1.length, Gorras: category2.length, Remeras: category3.length, Mallas:category4.length, products: newProducts})
     },

     getProducts:  async (req, res) => {
        const data = await db.Productos.findByPk(req.params.id,
         {
            include: [{association:'imagenes'},{association:'usuarios'},{association:'categorias'},{association:'talles'},{association:'colores'}]
          },
         {
         attributes: ['id', 'nombre', 'precio', 'cuotas', 'stock', 'descripcion']
         }
)
        res.json({...data.dataValues, imagen: "http://localhost:3000/images/" + data.imagenes[0].nombre})

     } 
}


module.exports = controller;