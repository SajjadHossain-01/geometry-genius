function inputValue (addingNumber) {
const getInput = document.getElementById(addingNumber);
const getInputText = getInput.value ;
const getInputValue = parseFloat(getInputText) ;
return getInputValue;

}

function showArea (addAreaById){
const showElementById = document.getElementById(addAreaById);
return showElementById ;
}
