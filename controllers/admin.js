const Products = require('../models/product');

exports.getAddProducts =(req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Products(title, imageURL, price, description);
    product.save();
    res.redirect('/');S
  }

// Admin page fetch all product list
exports.getProducts = (req, res, next) =>{
  Products.fetchAll(products => {
    //render in view
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    
    });
  });
};