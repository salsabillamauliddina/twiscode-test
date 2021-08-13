function decimalToBinary(num) {
  const number = parseInt(num)
  const binary = number.toString(2)
  return binary
}

console.log(decimalToBinary(19)); 

function binaryToDecimal (binary) {
  // 1001
  // 2^ 0 
  // let temp = 0
  // let remainder;
  // let i = 1;

  // while (x !== 0) {
  //   remainder = x % 2;
    
  // }

  return parseInt(binary,2);
  
}

console.log(binaryToDecimal('1001'))