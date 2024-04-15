// Event listener to ensure the DOM content is loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Array containing all possible characters for the password
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

  // Get elements for displaying passwords
  const firstPasswordEl = document.getElementById("first-password");
  const secondPasswordEl = document.getElementById("second-password");

  // Function to generate passwords and display them
  function clickPassword() {
      // Generate two random passwords
      let firstPassword = generatePassword();
      let secondPassword = generatePassword();
      // Display the passwords in the corresponding elements
      firstPasswordEl.textContent = firstPassword;
      secondPasswordEl.textContent = secondPassword;
  }

  // Length of the generated passwords
  let passwordLength = 15;

  // Function to generate a random character
  function random() {
      return characters[Math.floor(Math.random() * characters.length)];
  }

  // Function to generate a password using random characters
  function generatePassword() {
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
          password += random();
      }
      return password;
  }

  // Attach event listener to the button for generating passwords
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", clickPassword);
});

