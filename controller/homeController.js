const express = require('express')
const path = require ( 'path');

let homeController = {
    index: function (req,res) {
        res.sendFile(path.join(__dirname,'../views/home.html'));
    }
}
module.exports = homeController;