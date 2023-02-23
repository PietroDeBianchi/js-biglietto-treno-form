// Buttons const
const generaBtn = document.querySelector('#generaBtn');
const resetBtn = document.querySelector('#resetBtn');

// The inputs const
const nameLastnameInput = document.querySelector('#nameLastname');
const nameAnswer = document.querySelector('#nameAnswer');

// Get the selected option from the dropdown list
const ageSelect = document.getElementById('yourAge');
const selectedOption = ageSelect.options[ageSelect.selectedIndex].value;

// Get the value entered in the input field
const distanceInput = document.getElementById('yourDistance');
const distance = parseFloat(distanceInput.value);
console.log('distance:', distance);

// Calculate the cost per kilometer
const costPerKm = distance * 0.21;
console.log('costPerKm:', costPerKm);

// Apply the discount based on the selected option
let discount = 0;
if (selectedOption === 'Discount under 18') {
  discount = 0.2;
} else if (selectedOption === 'Discont over 65') {
  discount = 0.4;
}
console.log('discount:', discount);

// Calculate the total cost
const totalCost = (1 - discount) * costPerKm;
console.log('totalCost:', totalCost);

// Get the HTML element to display the final cost
const priceAnswer = document.getElementById('distancePriceAnswer');

// Set the text of the HTML element to the total cost
priceAnswer.textContent = `The total cost is $${totalCost.toFixed(2)}`;
// Get the selected option from the dropdown list

generaBtn.addEventListener('click', function () {
    // Get the value of the input field
    const nameLastname = nameLastnameInput.value;

    // Set the text content of the nameAnswer paragraph element
    nameAnswer.textContent = nameLastname;
});

resetBtn.addEventListener('click', function () {
    // Reset the input field
    nameLastnameInput.value = '';
    // Reset the input field
    nameAnswer.textContent = '';
});