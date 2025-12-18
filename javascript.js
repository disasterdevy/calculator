const display = document.querySelector('.display');
let display_number = 0;

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
const inputButtons = document.querySelectorAll(".inputButton");
length_buttons = inputButtons.length;

for(i=0; i<length_buttons; i++){
    inputButtons[i].addEventListener("click", event =>{
    let target = event.target;
    
    if(target.matches("button")){
        let value = target.innerHTML
        document.querySelector(".display").value += value;
    }
})}
