var dbMgr = require('./dbMgr');
var fs = require('fs');

// dbMgr.insert({"id":"abc"}, "entry_2016", "raw_log")

fs.readFile('./log/2016-06-13T12_00_00.000Z.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  jdata = JSON.parse(data)

  // jdata.forEach(function(log) {
  //   console.log(log._id);
  //   dbMgr.insert(log, "entry_2016", "raw_log")
  // })

});