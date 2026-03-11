const boton = document.getElementById("color");
const texto = document.getElementById("texto");

boton.onclick = function() {

    let counter = parseInt(background.getAttribute("counter") || "0");
    counter += 1;
    if (counter == 3) {
        counter = 0;}
        
    background.setAttribute("counter", counter);
    if (counter === 0) {
        background.style.backgroundColor = "Black";
        texto.style.color = "white";
    }else if (counter === 1) {
        background.style.backgroundColor = "White";
        texto.style.color = "Black";
    }else if (counter === 2) {
    background.style.backgroundColor = "Cyan";
        texto.style.color = "Red";}
}