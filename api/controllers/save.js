const fs = require('fs');

exports.save = async (req, res) => {
  try {
    const data = req.body;
    const saveIt = JSON.stringify(data);
    fs.writeFile('savedFile.json', saveIt, (error) => {
      console.log(error);
    });
    res.status(201).send({
      message: 'Data has been successfully saved.',
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
