let display =document.getElementById('display');

function appearInDisplay(value) {
    display.value += value;
    
}

function clearDisplay(){
    display.value = "";
}

function negativeNum(){
    display.value *= -1;
}
    

    

function calculate(){
    try{
        
        equation = display.value 

         display.value = total.toFixed(2);
            
    }
    catch(error){
        display.value = "Error"

    }
    
}

