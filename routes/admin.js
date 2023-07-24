const express = require('express');

const router = express.Router();
const path = require('path');
const rootDir = require("../util/path");

const products = [];

// /admin/add-product => GET request
router.get('/add-product',(req, res, next) => {
    res.render('add-product', {pageTitle:'Add Product', path: 'admin/add-product'});
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
// /admin/add-product => POST
router.post('/add-product',(req, res)=>{
    products.push({title: req.body.title});
    res.redirect('/');
}); 

exports.route = router;
exports.products = products;
