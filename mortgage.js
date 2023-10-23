window.onload = init;

function init() {
   
}

function monthlyPayment () {
    const principalAmount = document.getElementById("principalAmountText").value;
    const interestRate = document.getElementById("interestRateText").value;
    const loanLength = document.getElementById("loanLengthText").value * 12;
    const monthlyRate = (interestRate / 12) / 100; 

    const numerator = (principalAmount * monthlyRate);
    const denominator = 1 - (1 + monthlyRate) ** -loanLength;
    const monthlyPayment = numerator / denominator;

    console.log(monthlyPayment);
    document.getElementById("monthlyPaymentText").value = monthlyPayment.toFixed(2);
}



