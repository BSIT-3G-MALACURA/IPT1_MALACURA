function calculateMDAS() {
       
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);

    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

 
    let result = num1;
    result *= num2; 
    result /= num3; 
    result += num4; 
    result -= num5; 


    document.getElementById("result").innerText = "Result: " + result;
}