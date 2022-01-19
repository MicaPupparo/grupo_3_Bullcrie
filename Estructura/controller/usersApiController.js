const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = { 
   getAllUsers:  async (req, res) => {
        const data = await db.Usuarios.findAll();
        res.json({count: data.length, users: data})
     },

    getUser:  async (req, res) => {
        const data = await db.Usuarios.findByPk(req.params.id, {
            attributes: ['name', 'email', 'username', 'avatar']
         });
        res.json({...data.dataValues, avatar:  "http://localhost:3000/images/avatars/" + data.avatar})
     }
}

module.exports = controller;