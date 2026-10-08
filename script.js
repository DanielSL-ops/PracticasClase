
const fuego = document.querySelector(".simbolo");
const alarma = document.querySelector("#alarma");
const boton = document.querySelector("#activar");
const estado = document.querySelector("#estado");

let sonidoActivado = false;

// Habilitar el sonido
boton.addEventListener("click", async () => {

    try {
        // Reproducir en silencio para habilitar audio
        alarma.muted = true;
        await alarma.play();

        alarma.pause();
        alarma.currentTime = 0;
        alarma.muted = false;

        sonidoActivado = true;

        boton.textContent = "Sonido habilitado";
        boton.disabled = true;

        estado.textContent = "Pasa el mouse sobre el fuego";

    } catch (error) {
        alarma.muted = false;
        estado.textContent = "Error al activar el sonido";
        console.error(error);
    }
});

// Evento cuando entra el mouse
fuego.addEventListener("mouseenter", () => {

    if (sonidoActivado) {

        alarma.currentTime = 0;

        alarma.play().then(() => {
            estado.textContent = "¡ALARMA ACTIVADA!";
        }).catch((error) => {
            estado.textContent = "No se pudo reproducir el audio";
            console.error(error);
        });

    }

});

// Evento cuando sale el mouse
fuego.addEventListener("mouseleave", () => {

    alarma.pause();
    alarma.currentTime = 0;

    if (sonidoActivado) {
        estado.textContent = "Alarma detenida";
    }

});
