function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value
   
    interestRateValue = document.getElementById("Interest-rate").value
    
    monthsToPayValue = document.getElementById("months to pay").value
     

    interest =(loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2)
    

    document.getElementById("payment").innerHTML = `Monthly Payment: Math.floor${monthlyPayment}`
}