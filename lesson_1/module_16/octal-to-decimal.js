/* Write a Function named octalToDecimal that performs octal to decimal 
 * conversion. When invoked on a String that contains the representation 
 * of an octal number, the Function returns a decimal version of that 
 * value as a Number. Implement the conversion yourself: do not use 
 * something else to perform the conversion for you.
 */

const OCTAL = 8;

function octalToDecimal(numberString) {
  let numberCharArray = numberString.split('');

  let octalDigitArray = numberCharArray.map(element => Number(element));

  let length = octalDigitArray.length;
  let decimalValueArray = octalDigitArray.map((digit, idx) => {
    return digit * (OCTAL ** (length - 1 - idx));
  });

  const add = (accumulator, currentValue) => accumulator + currentValue;
  return decimalValueArray.reduce(add, 0);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
