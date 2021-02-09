// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false;

    //Capital letters can be ignored
    input = input.toLowerCase().split("");

    //Standard alphabet
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let secretCode = '';
    //Encoding the message
    if(encode === true){
      for(let i = 0; i < input.length; i++){
        let currentLetter = input[i];
        let index = alphabet.indexOf(currentLetter);
        if(index != -1){
          newIndex = (index + shift) % 26;
          secretCode += alphabet[newIndex];
        }
        else{
          secretCode += currentLetter;
        }
      }
    }
    //Decoding the message
    else{
      for(let i = 0; i < input.length; i++){
        let currentLetter = input[i];
        let index = alphabet.indexOf(currentLetter);
        if(index != -1){
          newIndex = ((index - shift) + 26) % 26;
          secretCode += alphabet[newIndex];
        }
        else{
          secretCode += currentLetter;
        }
      }
    }
    return secretCode; 
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
