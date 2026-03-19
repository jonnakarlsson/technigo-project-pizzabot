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

let dishChoice; 
if (foodType==="pizza"){
  prompt(
    `Please select a number to choose your choice of pizza: \n1 = Feta Cheese Pizza\n2 = Calzone\n3 = Bot-Spetzial Pizza`
    );
  }
  else if (foodType === "pasta"){
    prompt(
    `Please select a number to choose your choice of Pasta: \n1 = Carbonara\n2 = Bolognese\n3 = Bot-Spetzial Pasta`
    );
  }
  else if (foodType === "sallad"){
    prompt(
    `Please select a number to choose your choice of pizza: \n1 = Ceasar sallad\n2 = Goat Cheese sallad\n3 = Bot-Spetzial Sallad`
    );
  }

let dish; 
  if (foodType === pizza && dishChoice === 1){
    dish = "feta";
  }
  else if (foodType === pizza && dishChoice === 2){
    dish = "goatCheese";
  }
  else if (foodType === pizza && dishChoice === 1){
    dish = "specPizza";
  }
  else if (foodType === pasta && dishChoice === 1){
    dish = "carbonara";
  }
  else if (foodType === pasta && dishChoice === 2){
    dish = "bolognese";
  }
  else if (foodType === pasta && dishChoice === 1){
    dish = "specPasta";
  }
  else if (foodType === sallad && dishChoice === 1){
    dish = "ceasar";
  }
  else if (foodType === sallad && dishChoice === 2){
    dish = "goatCheese";
  }
  else if (foodType === sallad && dishChoice === 1){
    dish = "specSallad";
  }
  else
    alert (`Sorry, you must make a valid choice!`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
