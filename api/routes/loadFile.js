const express = require('express');
const router = express.Router();
const LoadFile = require('../controllers/load');

router.get('/', LoadFile.load);
module.exports = router;
