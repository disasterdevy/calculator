// storing only buttons with numbers in nodelist
const numberButtons = document.querySelectorAll(".numberButton");
n_number_buttons = numberButtons.length;

// storing only buttons with operators in nodelist
const operatorButtons = document.querySelectorAll(".operatorButton");
n_operator_buttons = operatorButtons.length;

// add event to buttons with numbers
for(i=0; i<n_number_buttons; i++){
    numberButtons[i].addEventListener("click", event =>{
    let target = event.target;
    
    if(target.matches("button")){
        let value = target.innerHTML
        document.querySelector(".display_part").value += value;
    }
})}

// add event to buttons with operators
for(i=0; i<n_operator_buttons; i++){
    operatorButtons[i].addEventListener("click", event =>{
    let target = event.target;
    
    if(target.matches("button")){
        let value = target.innerHTML
        document.querySelector("#display_operator").value = value;
    }
})}
