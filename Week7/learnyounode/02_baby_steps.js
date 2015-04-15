// function addition(process.argv){

//   var sum = Number(process.argv[2]) + Number(process.argv[3]);
//   console.log(sum);

// }


// var sum = null;

// process.argv.forEach(function(val, index, array) {

//   if (index > 1) {
//     sum += +val

//   }
// });

// console.log(sum);


var sum = 0
    
    for (var i = 2; i < process.argv.length; i++)
      sum += Number(process.argv[i])
    
    console.log(sum)