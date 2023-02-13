const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart); 
router.post('/cart/packages/:id', ordersCtrl.addToCart); 
router.post('/cart/checkout', ordersCtrl.checkout); 
router.put('/cart/qty', ordersCtrl.setPackageQtyInCart);

module.exports = router;
