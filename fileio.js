var printFile = function (filePath) {
  var fs = require("fs");
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
  });
}

printFile(process.argv[2]);

