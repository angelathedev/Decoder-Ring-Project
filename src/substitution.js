// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
     
    //Checks for repeated letters
     function repeatedLetters(alphabet){
      for(let i = 0; i < alphabet.length; i++){
        for(let j = i+1; j < alphabet.length; j++){
          if(alphabet[j] === alphabet[i]){
            return true;
          }
        }
      }
      return false;
    }
    //Returns false if the alphabet: is not a string, has less or more than 26 letters, has repeated characters, or does not exist
        if(typeof alphabet !== "string" || alphabet.length !== 26 || !alphabet || repeatedLetters(alphabet) === true){
          return false;
        }
    
        // standard alphabet
        const stdAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
        //Capital letters can be ignored
        input = input.toLowerCase().split("");
        alphabet = alphabet.toLowerCase().split("");
    
    
        let secretCode = "";
        if(encode === true){
          for(let i = 0; i < input.length; i++){
            let currentLetter = input[i];
            let index = stdAlphabet.indexOf(currentLetter);
            if(index === -1){
              secretCode += currentLetter;
            }
            else{
              secretCode += alphabet[index];
            }
        }
        }
    
        else{
          for(let i = 0; i < input.length; i++){
            let currentLetter = input[i];
            let index = alphabet.indexOf(currentLetter);
            if(index === -1){
              secretCode += currentLetter;
            }
            else{
              secretCode += stdAlphabet[index];
            }
          }
        }
    
        return secretCode;
    
    }
    

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
