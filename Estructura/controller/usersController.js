const path = require("path");
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator')

const controller = {
  login: (req, res) => {
    res.render("login.ejs")
  },
  
  register: (req, res) => {
    res.render("register.ejs")
  },

  procesarRegister: (req, res) => {
    const resultValidation = validationResult(req)
    return res.send(resultValidation)
  }
}

module.exports = controller;