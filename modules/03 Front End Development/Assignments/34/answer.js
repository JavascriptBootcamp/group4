
function sortInputValues() {
    var resultDisplay = document.getElementById("result_display");
    var inputElements = document.getElementsByClassName('inputElem');
    var inputsValues = [];
    var finalOutput = '';

    for (var i = 0; i < inputElements.length; i++) {
        inputsValues[i] = inputElements[i].value;
    }
    //console.log(`inputsValues = ${inputsValues}`);

    // Alphanumeric sort
    var finalInputsValues = inputsValues.sort();
    console.log(`inputsValues after sorting = ${inputsValues}`);

    for (var i = 0; i < finalInputsValues.length; i++) {
        if( finalInputsValues[i] === finalInputsValues[i+1] || finalInputsValues[i] === '') 
        {
            finalInputsValues.splice(i, 1);
            i--;
        }
    }


    for (var i = 0; i < finalInputsValues.length; i++) {  
        if(i < finalInputsValues.length - 1) finalOutput += finalInputsValues[i] + ' ,  ';
        else finalOutput += finalInputsValues[i];
    }

    

    resultDisplay.innerText = 'Inputs in alphanumeric order:  ' + finalOutput;
}
