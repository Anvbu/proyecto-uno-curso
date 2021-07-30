let cerrarBotones = document.querySelectorAll(".close");
let abrirBotones = document.querySelectorAll(".boton");
let modal = document.querySelectorAll(".modal");
let modalC = document.querySelectorAll(".modal-container");


abrirBotones.forEach ( function (elemento, index) {
    elemento.addEventListener ("click", function(i) {
        i.preventDefault();
        modalC[index].style.opacity = "1";
        modalC[index].style.visibility = "visible";
        modal[index].classList.toggle("modal-close");
    });

});

cerrarBotones.forEach ( function ( elemento, index) {
    elemento.addEventListener ("click", function() {
        modal[index].classList.toggle("modal-close");
    
        setTimeout(function() {
            modalC[index].style.opacity = "0";
            modalC[index].style.visibility = "hidden";
        }, 900);
    
    });
});