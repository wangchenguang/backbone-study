function checkBMI(age, height, weight) {
  height = parseFloat(height);
  weight = parseFloat(weight);
  age = parseInt(age);
  var value = cal(height, weight);
  console.log(value);
  var config = age - 14 >= 0 ? [16, 30] : [11, 25];
  if (value < config[0] || value > config[1]) {
    return '不通过'
  } else {
    return '通过';
  }

  function cal(height, weight) {
    return weight / ((height / 100) * (height / 100));
  }
}

var age = 13;
var height = 100;
var weight = 25.5;
var notice = checkBMI(age, height, weight);
console.log(notice);