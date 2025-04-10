const apiKey = '5cc86808f12089b0ce29ea59';
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDisplay = document.getElementById('result');

async function fetchCurrencies() {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await res.json();
    data.supported_codes.forEach(([code, name]) => {
        fromCurrency.innerHTML += `<option value="${code}">${code} - ${name}</option>`;
        toCurrency.innerHTML += `<option value="${code}">${code} - ${name}</option>`;
    });
}

document.getElementById('convert').addEventListener('click', async () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;
    if (!amount) return;
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await res.json();
    resultDisplay.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
});

fetchCurrencies();