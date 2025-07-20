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

        
         display.value = total.toFixed(3);
            

        
    }
    catch(error){
        display.value = "Error"

    }
    
}
    

