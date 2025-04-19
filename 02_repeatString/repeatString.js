const repeatString = function(a, b) {
    let string = "";

    if (b < 0) {
      return "ERROR";
    }

   for (let i = 0; i < b; i++) {
     string += a;
   }

   return string;


};

// Do not edit below this line
module.exports = repeatString;
