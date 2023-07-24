const express = require('express');

const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products');



// /admin/add-product => GET request
router.get('/add-product', productsController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);

router.post('/add-product', productsController.showProducts);
  
module.exports =router;
