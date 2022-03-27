var buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function (){
        alert("I got clicked");
    })
});