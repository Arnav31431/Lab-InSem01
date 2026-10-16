let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.addEventListener("click",function(){
            alert("Button clicked!");
        })
    });
});