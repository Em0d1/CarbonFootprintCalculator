function calculate() {
    km = document.getElementById('km').value || 0;
    electricity = document.getElementById('electricity').value || 0;

    CO2 = (km * 30 * 0.12) + (electricity * 0.45);

    document.getElementById('result').innerText =
        'Monthly CO2: ' + CO2.toFixed(2) + ' kg'
}