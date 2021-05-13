const fs = require('fs');
const homedir = require('os').homedir();
exports.load = async (req, res) => {
  try {
    fs.readFile(
      `${homedir}/Desktop/yourSavedFile.json`,
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send({ data: data });
      }
    );
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
