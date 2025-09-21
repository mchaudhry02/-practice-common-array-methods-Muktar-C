//Task 1: Create the Order System
let orders = [
  ["Latte", "Tea", "Espresso"],     // Drinks
  ["Croissant", "Muffin", "Bagel"]  // Pastries
];

//Task 2: Log the number of items dynamically with .length
console.log("Number of drinks:", orders[0].length);
console.log("Number of pastries:", orders[1].length);

//Task 3: Access Orders Using Bracket Notation
console.log(orders[0][0]); // First drink (Latte)
console.log(orders[1][2]); // Last pastry (Bagel)

//Task 3: Access Orders Using Bracket Notation
console.log(orders[0][0]); // First drink (Latte)
console.log(orders[1][2]); // Last pastry (Bagel)

//Task 4: Access Orders Dynamically with Variables
for (let row = 0; row < orders.length; row++) {
  for (let item = 0; item < orders[row].length; item++) {
    console.log(orders[row][item]);
  }
}

//Task 5: Loop through the drinks only (row 0)
for (let item = 0; item < orders[0].length; item++) {
  console.log(orders[0][item]);
}

//Task 6: Add a New Order & Track Length
orders[0].push("Flat White");  
console.log("Updated number of drinks:", orders[0].length);

//Task 7: Access Added Order with Variables
let row = 0;                           // drinks row
let item = orders[0].length - 1;       // last index after adding new item
console.log("New order:", orders[row][item]);
