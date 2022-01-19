const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = { 
    getAllProducts:  async (req, res) => {
        const data = await db.Productos.findAll();
        res.json({count: data.length, productos: data})
     },

     getProducts:  async (req, res) => {
        const data = await db.Productos.findByPk(req.params.id);
        res.json()
     }
}


module.exports = controller;