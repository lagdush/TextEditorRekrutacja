const fs = require('fs');

exports.load = async (req, res) => {
  try {
    fs.readFile('savedFile.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send({ data: data });
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
