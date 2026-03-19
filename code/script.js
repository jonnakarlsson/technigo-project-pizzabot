// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Italian cuisine. Ready to order? - Click 'OK' to begin.`
)
let firstname = prompt(`Please enter your first name`); 

alert(`Hi ${firstname}`);

// Step 2 - Food choice

let typeChoice = prompt(
  `Please select a number to choose your choice of food: \n1 = Pizza\n2 = Pasta\n3 = Sallad`
);

let foodType; 
  if (typeChoice === "1"){
    foodType = "pizza";
  } 
  else if (typeChoice === "2"){
    foodType = "pasta"; 
  }
  else if (typeChoice === "3"){
    foodType = "sallad";
  }
  else {
      alert (`You need to pick a valid number 1,2 or 3. Bot will close, please refresh page to start over.`);
    }

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
