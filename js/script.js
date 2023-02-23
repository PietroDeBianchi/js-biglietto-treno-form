/* Data
0.21€/Km ticket's cost for km
-20% discount under 18
-40% discount  over 65
? = ticket's cost normal and discount */

let myDistance = prompt("How many kilometers do you have to travel?");
let myAge = prompt("How old are you");

myDistance = Number(myDistance);
myAge = Number(myAge);


// Calculate the cost based on the distance and rate
let myCost = myDistance * 0.21;
myCost = Number(myCost);

if (myAge < 18) {
    myCost *= 0.8; // Apply a 20% discount for users under 18
  } else if (myAge >= 65) {
    myCost *= 0.6; // Apply a 40% discount for users 65 and over
}



// Display the cost to the user

console.log("The cost for the ticket is " + myCost.toFixed(2) + "€.");

const userTicket = document.getElementById("ticket-info");
