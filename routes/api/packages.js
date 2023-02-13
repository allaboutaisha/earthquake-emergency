const express = require('express');
const router = express.Router();
const packagesCtrl = require('../../controllers/api/packages');

router.get('/', packagesCtrl.index);
router.get('/:id', packagesCtrl.show);

module.exports = router;