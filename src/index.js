module.exports = function toReadable (number) {
    let numberObj = {
        0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve',
        13:'thirteen', 15:'fifteen', 18:'eighteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',      
    };
    if (number>=0 && number<=12) {
      return (`${numberObj[number]}`);  
    }
    else if (number>=14 && number<=19 && number!==15 && number!==18 ) {
      const teenNumber = number%10;
      return (`${numberObj[teenNumber]}teen`);  
    }
    else if (number===13 || number===15 || number===18) {
      return (`${numberObj[number]}`);
    }
    else if (number>=20 && number<=99) {
      return getDecimalNumber(number);        
    }
    else if (number>=100 && number<=999) {
      const hundreds = Math.floor(number/100);
      const decimals = number-hundreds*100;
      if (decimals === 0) {
        return (`${numberObj[hundreds]} hundred`);
      } 
      else {
        const decimalsString = toReadable(decimals);
        return (`${numberObj[hundreds]} hundred ${decimalsString}`); 
      }
    }    
    

    function getDecimalNumber(num) {
      const decimals = Math.floor(num/10)*10;
      const endNum = num-decimals;
      console.log(endNum);
      if (endNum === 0) {
        return (`${numberObj[decimals]}`);
      }
      else
        return (`${numberObj[decimals]} ${numberObj[endNum]}`);
    }     
}
