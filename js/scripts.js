$(document).ready(function() {
    $("#calculate").click(function(){
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        const operator = $("#operator").val();
        let result;

           if (isNaN(num1) || isNaN(num2)) {
              $("#result").text("Invalid input")
              return;
           }

           if (operator === "+"){
              result = num1 + num2            
           }else if (operator === "-"){
              result = num1 + num2
           }else if (operator === "*") {
              result = num1 + num2
           }else if (operator === "/") {
              result = num1 + num2
           }

           $("#result").text(result);
    });
});