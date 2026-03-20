// Start here

// Step 1 - Welcome and introduction

alert(`Welcome to our Italian cuisine. Ready to order? - Click 'OK' to begin.`);
let firstname = prompt(`Please enter your first name`);

alert(`Hi ${firstname}`);

// Step 2 - Food choice

let typeChoice = prompt(
  `Please select a number to choose your choice of food: \n1 = Pizza\n2 = Pasta\n3 = Salad`,
);

let foodType;
if (typeChoice === "1") {
  foodType = "pizza";
} else if (typeChoice === "2") {
  foodType = "pasta";
} else if (typeChoice === "3") {
  foodType = "salad";
} else {
  alert(
    `You need to pick a valid number 1,2 or 3. Bot will close, please refresh page to start over.`,
  );
}
alert(`You chose ${foodType} , good choice!`);

// Step 3 - Subtype choice

let finalDish;

if (foodType === "pizza") {
  let pizzaChoice = prompt(
    `Please select a number to choose your choice of pizza: \n1 = Feta Cheese Pizza\n2 = Calzone\n3 = Bot-Spetzial Pizza`,
  );
  if (pizzaChoice === "1") finalDish = "Feta Cheese Pizza";
  else if (pizzaChoice === "2") finalDish = "Calzone";
  else if (pizzaChoice === "3") finalDish = "Bot-Spetzial Pizza";
  else alert("Invalid choice");
} else if (foodType === "pasta") {
  let pastaChoice = prompt(
    `Please select a number to choose your choice of Pasta: \n1 = Carbonara\n2 = Bolognese\n3 = Bot-Spetzial Pasta`,
  );
  if (pastaChoice === "1") finalDish = "Carbonara";
  else if (pastaChoice === "2") finalDish = "Bolognese";
  else if (pastaChoice === "3") finalDish = "Bot-Spetzial Pasta";
  else alert("Invalid choice");
} else if (foodType === "salad") {
  let saladChoice = prompt(
    `Please select a number to choose your choice of Salad: \n1 = Ceasar salad\n2 = Goat Cheese salad\n3 = Bot-Spetzial Salad`,
  );
  if (saladChoice === "1") finalDish = "Ceasar salad";
  else if (saladChoice === "2") finalDish = "Goat Cheese salad";
  else if (saladChoice === "3") finalDish = "Bot-Spetzial Salad";
  else alert("Invalid choice");
}

alert(`You picked ${finalDish}`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirfinalDishion
// Your code goes here
