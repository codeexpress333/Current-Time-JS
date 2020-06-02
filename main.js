//Get Value
let clock = document.getElementById("clock");

//Set Time 
setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); //Method
}, 1000);

