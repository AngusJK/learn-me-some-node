var fs = require('fs');
// var dir = process.argv[0];

fs.readdir(process.argv[0], 'uf8', function(err, list) {
  
  var files = list.path.extname(process.argv[1]).split('\n');
  console.log(files);
});


// // list is an array of filename strings

// first argument dir name
// second argument file ext
// path.extname()
