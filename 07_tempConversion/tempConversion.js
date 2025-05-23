const convertToCelsius = function(c) {
  let celc = (c - 32) * (5/9);
  return Math.round(celc * 10) / 10;
};

const convertToFahrenheit = function(f) {
  let faren = f * (9/5) + 32;
  return Math.round(faren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
