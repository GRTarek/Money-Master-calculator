function getElementById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value;
    const elementFieldByFloat = parseFloat(elementFieldString);
    return elementFieldByFloat;
}
function setResultElementById(elementId, value) {
    const balanceElement = document.getElementById(elementId);
    balanceElement.innerText = value;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodElement = getElementById('food');
    const rentElement = getElementById('rent');
    const clothElement = getElementById('clothes');

    const totatExpances = foodElement + rentElement + clothElement;
    setResultElementById("total-expense", totatExpances);

    const income = getElementById('income');
    const netIncome = income - totatExpances;
    setResultElementById('balance', netIncome)

});

document.getElementById('save-btn').addEventListener('click', function () {
    const income = getElementById('income');
    const save = getElementById('save');
    const totalIncome = (income * save) / 100;
    setResultElementById('saving-amount', totalIncome)


    const remainingBalance = netIncome - totalIncome;
    setResultElementById('remaining-balance', remainingBalance)

})