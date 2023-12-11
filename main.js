var rangeInput = document.getElementById("range");
  var numberInput = document.getElementById("number");
  var rangeValueElement = document.getElementById("value-range");
  var resultElement = document.getElementById("result");
  var resultDiv = document.querySelector(".result");

  if(numberInput.value != 0){
    document.querySelector(".result")
  }
  // Range input dəyəri dəyişəndə işləyən funksiya
  rangeInput.addEventListener("input", updateRangeValue);

  // Number input dəyəri dəyişəndə işləyən funksiya
  numberInput.addEventListener("input", updateResult);

  function updateRangeValue() {
    rangeValueElement.textContent = rangeInput.value + "%";
    updateResult(); // Her iki input dəyəri dəyişəndə nəticəni update elə
  }

  function updateResult() {
    var totalBill = parseFloat(numberInput.value);
    var tipPercentage = parseFloat(rangeInput.value);
    var tipAmount = (totalBill * tipPercentage) / 100;
    var billWithTip = totalBill + tipAmount
    var result = document.querySelector("#result")
    result.value = "$" + tipAmount.toFixed(2);
    var newResult=document.querySelector("#new-result")
    newResult.value = "$" + billWithTip.toFixed(2);

    if (numberInput.value) {
        resultDiv.style.display = "block";
      } else {
        resultDiv.style.display = "none";
      }
  }

