const display = document.querySelector('.display');
let display_number = 0;

// successfully showing display_number on webpage
// display.innerHTML = display_number;

document.querySelector(".inputButton").addEventListener("click", event =>{
    let target = event.target;
    if(target.matches("button")){
        let value = target.innerHTML
        document.querySelector(".display").value += value;
    }
})
