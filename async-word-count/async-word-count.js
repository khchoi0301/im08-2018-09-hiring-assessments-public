var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, data1) => {
    if (err) {
      callback(err, null)
      return
    }
    getWordCount(filePathTwo, (err, data2) => {
      if (err) {
        callback(err)
        return
      }
      callback(null, data1 + data2)
    })
  })
};

module.exports = getTotalWordCount;
