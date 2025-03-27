
// Get references to HTML elements
let header = document.getElementById("header");
let btn = document.getElementById("name")
let color = window.document.getElementById("color")
let clear = window.document.getElementById("clear")

// Function to validate local storage and display the welcome message
function validateLocalStorage()
{
    if(localStorage.name){
        header.textContent = `Hello, ${localStorage.name}`;
        if (localStorage.color){
            header.style.color = localStorage.color;
            color.value = localStorage.color;
        }
    }
    else 
    {
        header.textContent = "Hello, guest";
    }
}
// welcome message after 2000 milliseconds
setTimeout(validateLocalStorage, 2000);

// Event listener for the "Enter Name" button click
btn.addEventListener("click", () => {
    let name = "";
      // Keep asking the user for a name until a valid input is given
    while(!name){
        name = prompt("Enter your name").trim();
    }
     // Update the header text and store the name in local storage
    header.textContent = `Hello, ${name}`;
    localStorage.name = name;

});

// Event listener for the color input field change
color.addEventListener("input", () => {
    let color = event.target.value;  
    header.style.color = color;    
    localStorage.color = color;

});
// Event listener for the "clear" button click
clear.addEventListener("click", () => {
localStorage.clear();
header.textContent = "Hello, guest";
});


