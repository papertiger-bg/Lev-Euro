const rate = 1.95583;

document.getElementById('toEuro').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  if (!isNaN(amount)) {
    const result = (amount / rate).toFixed(2) + " €";
    document.getElementById('result').textContent = result;
  }
});

document.getElementById('toLev').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  if (!isNaN(amount)) {
    const result = (amount * rate).toFixed(2) + " лв.";
    document.getElementById('result').textContent = result;
  }
});
