let display =document.getElementById('display');

function appearInDisplay(value) {
    display.value += value;
    
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        equation = display.value 
        total = eval(equation);
        display.value = total;
    }
    catch(error){
        display.value = "Error"

    }

    

}