// Elements
const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('calculateBtn');
const tipAmountDisplay = document.getElementById('tipAmount');
const totalBillDisplay = document.getElementById('totalBill');

// Function to calculate tip and total bill
function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);

  if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
    alert('Please enter valid numbers for both fields');
    return;
  }

  // Calculate the tip amount and total bill
  const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
  const totalBill = (billAmount + parseFloat(tipAmount)).toFixed(2);

  // Display the results
  tipAmountDisplay.textContent = tipAmount;
  totalBillDisplay.textContent = totalBill;
}

// Event Listener for the calculate button
calculateBtn.addEventListener('click', calculateTip);
