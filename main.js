document.addEventListener("DOMContentLoaded", function() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  const firstPasswordEl = document.getElementById("first-password");
  const secondPasswordEl = document.getElementById("second-password");

  //Get first and second passwords
  function clickPassword(){
      let firstPassword = generatePassword();
      let secondPassword = generatePassword();
      firstPasswordEl.textContent = firstPassword;
      secondPasswordEl.textContent = secondPassword;
  }

  let passwordLength = 15;

  //Create random characters
  function random(){
      return characters[Math.floor(Math.random() * characters.length)];
  }

  //Use random to generate password
  function generatePassword(){
      let password = ""
      for (let i = 0; i < passwordLength; i++){
          password += random();
      }
      return password;
  }

  // Attach event listener to the button
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", clickPassword);
});
