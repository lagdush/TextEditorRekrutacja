const express = require('express');
const app = express();
var cors = require('cors');

const saveFile = require('./api/routes/saveFile');
const loadFile = require('./api/routes/loadFile');

app.use(cors());
app.use(express.json());
app.use('/api/save', saveFile);
app.use('/api/load', loadFile);
app.listen(3000);
