// Get the "Genera" button
const generateButton = document.getElementById('generaBtn');

// Add an event listener to the button
generateButton.addEventListener('click', () => {
  // Get the selected option from the dropdown list
  const ageSelect = document.getElementById('yourAge');
  const selectedOption = ageSelect.options[ageSelect.selectedIndex].value;

  // Get the value entered in the input field
  const distanceInput = document.getElementById('yourDistance');
  const distance = parseFloat(distanceInput.value);

  // Calculate the cost per kilometer
  const costPerKm = distance * 0.21;

  // Apply the discount based on the selected option
  let discount = 0;
  if (selectedOption === 'Discount under 18') {
    discount = 0.2;
  } else if (selectedOption === 'Discont over 65') {
    discount = 0.4;
  }

  // Calculate the total cost
  const totalCost = (1 - discount) * costPerKm;

  // Get the HTML elements to display the results
  const nameAnswer = document.getElementById('nameAnswer');
  const distancePriceAnswer = document.getElementById('distancePriceAnswer');
  const ageAnswer = document.getElementById('ageAnswer');

  // Get the value entered in the name field
  const nameInput = document.getElementById('nameLastname');
  const name = nameInput.value;

  // Set the text of the HTML elements to the results
  nameAnswer.textContent = `Nome e Cognome: ${name}`;
  distancePriceAnswer.textContent = `Prezzo totale: ${totalCost.toFixed(2)} €.`;
  ageAnswer.textContent = `Fascia di età: ${selectedOption}`;
});

// Get the "Annulla" button
const resetButton = document.getElementById('resetBtn');

// Add an event listener to the button
resetButton.addEventListener('click', () => {
  // Reset the form
  document.getElementById('nameLastname').value = '';
  document.getElementById('yourDistance').value = '';
  document.getElementById('yourAge').selectedIndex = 0;

  // Reset the results
  document.getElementById('nameAnswer').textContent = '';
  document.getElementById('distancePriceAnswer').textContent = '';
  document.getElementById('ageAnswer').textContent = '';
});
