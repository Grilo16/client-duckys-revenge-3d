const fs = require("fs");

const updateIndexHelper = (exportName, indexPath) => {
    fs.appendFile(`./src/${indexPath}index.js`, `\r\nexport * from "./${exportName}"\r\n`, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
}
    

  exports.updateIndexHelper = updateIndexHelper

  