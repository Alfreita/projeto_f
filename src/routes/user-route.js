'use strict'

const express = require ('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

router.post('/',controller.post);
router.get('/',controller.get);
router.get('/',controller.getByCpf);

module.exports = router;
