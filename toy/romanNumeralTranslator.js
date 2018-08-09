
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){  
// TODO: Implement me!
  var keyarray = romanNumeral.split('');
  var result = 0;

  for(var i = 0; i < keyarray.length; i++) {
    for(key in DIGIT_VALUES) {    
      if(key === keyarray[i]) {      
        result += DIGIT_VALUES[key];
      }    
    }
  } 
  return result;
};

translateRomanNumeral("LX") // 60
