let isToEuro = true;
document.getElementById('toggle').addEventListener('click', () => {
    isToEuro = !isToEuro;
    const btn = document.getElementById('toggle');
    btn.textContent = isToEuro ? 'лв ➝ €' : '€ ➝ лв';
    convert();
});

document.getElementById('amount').addEventListener('input', convert);

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount)) {
        document.getElementById('result').textContent = 'Резултат: 0.00';
        return;
    }
    const result = isToEuro ? (amount / 1.95583) : (amount * 1.95583);
    const symbol = isToEuro ? '€' : 'лв';
    document.getElementById('result').textContent = `Резултат: ${result.toFixed(2)} ${symbol}`;
}
