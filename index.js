const { saveFile, loadFile } = require('./src/callToApi');
const { bold, italic, addBullet } = require('./src/textEditorFontFunctions');

document.getElementById('save').addEventListener('click', saveFile);

document.getElementById('load').addEventListener('click', loadFile);

document.getElementById('bold').addEventListener('click', bold);

document.getElementById('italic').addEventListener('click', italic);

document.getElementById('list').addEventListener('click', addBullet);
