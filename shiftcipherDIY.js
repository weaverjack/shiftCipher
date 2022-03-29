
//creating class 

class ShiftCipher {
    //constructor provides properties including shift which should be a number. the code variable is to store an array of the shifted characters
    constructor(shift) {
      this.shift = shift;
      this.code = [];
    }
  
    //method that takes each character in a string and shifts it.
  encrypt(string) { 
    string=string.toLowerCase();
    let newString = '';
    for (let i=0; i<string.length; i++)
    { let characterCode = string.charCodeAt(i);
        //if char is not a letter it will stay the same and be pushed to array.
    if (characterCode > 122 || characterCode < 97) {
      characterCode=characterCode;
      //if the shifted charcode is greater than z it will start over at a
    } else if (
      (characterCode+this.shift) > 122 ) {
        characterCode+=(this.shift-26);
      } else { characterCode += this.shift};
      this.code.push(characterCode);
  }

  //console.log(this.code);
  //string.fromCharCode turns charcodes into a string. the .apply lets me pass an array into it. toUpperCase capitalizes all the characters
  newString = String.fromCharCode.apply(String, this.code).toUpperCase();
  console.log(newString);
}
  
  decrypt(string) {
    let newString = '';
    for (let i=0; i<string.length; i++) {
        let characterCode = string.charCodeAt(i);
    if (characterCode >90 || characterCode <65) {
        characterCode=characterCode;
    } else if ((characterCode-this.shift) < 65) {
        characterCode+=(26-this.shift);
    } else {characterCode-=this.shift;}
    this.code.push(characterCode);
    }
    //console.log(this.code);
    newString = String.fromCharCode.apply(String, this.code).toUpperCase();
    console.log(newString);
  }
  }
  
  const pigLatin = new ShiftCipher(2);
  pigLatin.encrypt('I love to code!');
  pigLatin.encrypt('I <3 my puppy');
  pigLatin.decrypt('K NQXG VQ EQFG!');
  pigLatin.decrypt('K <3 OA RWRRA');