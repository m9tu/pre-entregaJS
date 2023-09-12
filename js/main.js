function jugarPiedraPapelTijera() {
    let opciones = ["piedra", "papel", "tijera"];

    let eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let eleccionJugador = prompt("Elegi: piedra, papel o tijera").toLowerCase();

    if (!opciones.includes(eleccionJugador)) {
        alert("Elección inválida. Por favor, elige piedra, papel o tijera.");
        return;
    }

    let resultado;
    if (eleccionJugador === eleccionComputadora) {
        resultado = "Un empate";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado = "Ganaste!";
    } else {
        resultado = "La computadora gano";
    }

    alert(
        "Elegiste " + eleccionJugador + "\nLa computadora eligió " + eleccionComputadora + "\n" + resultado
    );
}

jugarPiedraPapelTijera();