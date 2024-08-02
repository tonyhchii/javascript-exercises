const convertToCelsius = function(temperature) {
  const fahToCelRatio = 5/9;
  const conversionConstant = 32;
  let celsius = fahToCelRatio * (temperature - conversionConstant);
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(temperature) {
  const celToFahRatio = 9/5;
  const conversionConstant = 32;
  let fahrenheit = celToFahRatio * temperature + conversionConstant;
  return Math.round(fahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
