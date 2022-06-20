'use strict'

function BinarioADecimal(num) {

var data = num.split("").reverse ();

var result = 0;

for (var i = 0; i < data.length; i++) {
    result += 2 ** i * data [i];
}

return result;

}

function DecimalABinario(num) {

var result = "";

while (num > 0) {
  result = (num % 2) + result;
  num = Math.floor(num / 2);

}
return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}