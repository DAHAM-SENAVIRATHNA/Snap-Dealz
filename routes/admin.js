const express = require('express');

const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin');



// /admin/add-product => GET request
router.get('/add-product', adminController.getAddProducts);

// /admin/Products => GET request
router.get('/products');

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProducts);
  
module.exports =router;
