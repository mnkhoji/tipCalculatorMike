const buttonEL = document.querySelector("calcbutton");
const BillAmount = document.querySelector("billAmount");
const TipAmount = document.querySelector("tip");
const TotalAmount = document.querySelector("total");


function totalCalculator() {
    const BillValue = BillAmount.value;
    const TipValue = TipAmount.value;
    const totalValue = BillValue + (BillValue * TipValue)/100;
    TotalAmount.innerText = totalValue.toFixed(2);
}

buttonEL.addEventListener("click", totalCalculator);
