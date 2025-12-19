const display = document.querySelector('.display');


let display_number_one = 0;
let_display_number_two = 0;
let operator;

// successfully showing display_number on webpage
// display.innerHTML = display_number;

// document.querySelector(".inputButton").addEventListener("click", event =>{
//     let target = event.target;
//     if(target.matches("button")){
//         let value = target.innerHTML
//         document.querySelector(".display").value += value;
//     }
// })

// trying to fetch all buttons
const numberButtons = document.querySelectorAll(".inputButton");
n_number_buttons = numberButtons.length;

for(i=0; i<n_number_buttons; i++){
    numberButtons[i].addEventListener("click", event =>{
    let target = event.target;
    
    if(target.matches("button")){
        let value = target.innerHTMLgit 
        document.querySelector(".display").value += value;
    }
})}
