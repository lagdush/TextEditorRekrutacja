const express = require('express');
const router = express.Router();
const saveFile = require('../controllers/save');

router.post('/', saveFile.save);
module.exports = router;
