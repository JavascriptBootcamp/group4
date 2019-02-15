function checkOddAndEvenNums(){
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    
    var resultMessageElem = document.getElementById('resultMessage');
    resultMessageElem.innerText = '';
    

    if(num1 > num2) {
        resultMessageElem.style.color = 'red';
        resultMessageElem.innerHTML = "The second number must be great than the first number";
    }
    else {
        var num = num1;
        var massageContent = '';
        do {
            var evenOrOdd = '';

            if(num % 2 === 0) evenOrOdd = 'even';
            else evenOrOdd = 'odd';   

            massageContent += num + " is "+ evenOrOdd + "<br>";
            num++;  
        }
        while(num<=num2);

        resultMessageElem.style.color = 'blue';
        resultMessageElem.innerHTML = massageContent;
    }
}