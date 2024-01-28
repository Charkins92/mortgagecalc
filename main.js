
//const loanAmount = document.getElementById("loanAmount").value;
//const downPayment = document.getElementById("downPayment").value;
//const loanTerm = document.getElementById("loanTerm");
//const interestRate = document.getElementById("interestRate");


function calculateMonthlyPayment() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    


    const resultText = document.getElementById("result");
    const li = document.createElement("li");
    const text = document.createTextNode("Monthly Payment: $" = monthlyPayment.toFixed(2));
    li.appendChild(text);

    resultText.appendChild(li);
}
