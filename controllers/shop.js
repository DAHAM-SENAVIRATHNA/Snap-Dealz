
const Product = require('../models/product');

//Load product List
exports.showProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/product',
    
      });
   });
}; 

//Load index page
exports.getIndex = (req, res, next)=>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    
    });
 });
};

exports.getCart = (req, res, next)=>{
  res.render('shop/cart', {
    pageTitle: 'Your Cart ',
    path: '/cart',
});
};

exports.getCheckout = (req, res, next)=>{
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}