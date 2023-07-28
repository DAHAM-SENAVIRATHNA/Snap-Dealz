
const Product = require('../models/product');




exports.showProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
   });
}; 

