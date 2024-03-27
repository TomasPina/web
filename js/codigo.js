Inicio();


function Inicio() {
    document.addEventListener("DOMContentLoaded", function() {
        var btnProject1 = document.getElementById("btnProject1");
        if (!/Mobi/.test(navigator.userAgent)) { // Verifica si el usuario está en un dispositivo móvil
            btnProject1.addEventListener("click", function() {
                window.open("../Aplicacion tienda/Tienda.html");
            });
        } else {
            btnProject1.disabled = true; // Desactiva el botón en dispositivos móviles
        }
    });
}


