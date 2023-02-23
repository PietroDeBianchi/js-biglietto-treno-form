const generaBtn = document.querySelector('#generaBtn')
const ressetBtn = document.querySelector('#resetBtn')

generaBtn.addEventListener('click', 
    function () {
        const nameLastname = document.getElementById('nameLastname');
        const msgNameLastname = nameLastname.value;
        alert(msgNameLastname);

        const yourDistance = document.getElementById('yourDistance');
        const msgYourDistance = yourDistance.value;
        alert(msgYourDistance);

        const yourAge = document.getElementById('yourAge');
        alert(yourAge.value);
    }

); 

resetBtn.addEventListener('click', 
    function () {
        const nameLastname = document.getElementById('nameLastname');
        nameLastname.value  = '';
    }

);

// const myDistance = prompt("How many kilometers do you have to travel?");
// const myAge = prompt("How old are you");

// myDistance = Number(myDistance);
// myAge = Number(myAge);

// // Calculate the cost based on the distance and rate
// const myCost = myDistance * 0.21;
// myCost = Number(myCost);

// if (myAge < 18) {
//   myCost *= 0.8; // Apply a 20% discount for users under 18
// } else if (myAge >= 65) {
//   myCost *= 0.6; // Apply a 40% discount for users 65 and over
// }