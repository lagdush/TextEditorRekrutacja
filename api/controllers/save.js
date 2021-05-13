const fs = require('fs');
const homedir = require('os').homedir();
exports.save = async (req, res) => {
  try {
    const data = req.body;
    const saveIt = JSON.stringify(data);

    fs.writeFile(`${homedir}/Desktop/yourSavedFile.json`, saveIt, (error) => {
      console.log(error);
    });
    res.status(201).send({
      message: 'Data has been successfully saved.',
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
