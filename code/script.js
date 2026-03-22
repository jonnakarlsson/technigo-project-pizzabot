// Start here

// Step 1 - Welcome and introduction

alert(`Welcome to our Italian cuisine. Ready to order? - Click 'OK' to begin.`);
let firstname = prompt(`Please enter your first name`);

alert(`Hi ${firstname}`);

// Step 2 - Food choice

let typeChoice = prompt(
  `Please select a number to choose your choice of food: 
  1 = Pizza 
  2 = Pasta
  3 = Salad`,
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
    `Please select a number to choose your choice of pizza: 
    1 = Feta Cheese Pizza
    2 = Calzone
    3 = Bot-Spetzial Pizza`,
  );
  if (pizzaChoice === "1") finalDish = "Feta Cheese Pizza";
  else if (pizzaChoice === "2") finalDish = "Calzone";
  else if (pizzaChoice === "3") finalDish = "Bot-Spetzial Pizza";
  else alert("Invalid choice");
} else if (foodType === "pasta") {
  let pastaChoice = prompt(
    `Please select a number to choose your choice of Pasta: 
    1 = Carbonara
    2 = Bolognese
    3 = Bot-Spetzial Pasta`,
  );
  if (pastaChoice === "1") finalDish = "Carbonara";
  else if (pastaChoice === "2") finalDish = "Bolognese";
  else if (pastaChoice === "3") finalDish = "Bot-Spetzial Pasta";
  else alert("Invalid choice");
} else if (foodType === "salad") {
  let saladChoice = prompt(
    `Please select a number to choose your choice of Salad: 
    1 = Ceasar salad
    2 = Goat Cheese salad
    3 = Bot-Spetzial Salad`,
  );
  if (saladChoice === "1") finalDish = "Ceasar salad";
  else if (saladChoice === "2") finalDish = "Goat Cheese salad";
  else if (saladChoice === "3") finalDish = "Bot-Spetzial Salad";
  else alert("Invalid choice");
}

alert(`You picked ${finalDish}`);

// Step 4 - Age
let age = prompt(`Please enter your age`);
let adult;
if (age >= 13) {
  adult = true;
}
let price;
if (adult) {
  price = 15;
} else {
  price = 9;
}
alert(`Your price is ${price} EUR`);

// Step 5 - Order confirfinalDishion

let order;

if (adult) {
  let confirmation = prompt(
    `You selected a ${finalDish}, and the price will be ${price}. 
    Select a number to confirm:
  1 = I confirm my order 
  2 = I changed my mind`,
  );
  if (confirmation === "1") order = true;
  else if (confirmation === "2") order = false;
  else alert(`Invalid choice!`);
} else {
  let confirmation = prompt(
    `You selected a childsize ${finalDish}, and the price will be ${price}. 
    Select a number to confirm:
  1 = I confirm my order 
  2 = I changed my mind`,
  );
  if (confirmation === "1") order = true;
  else if (confirmation === "2") order = false;
  else alert(`Invadid choice!`);
}
if (order) {
  alert(`Thank you for your order! It will be ready for pick-up in 10 minutes`);
}
