let carrito = [];
let total = 0;

function agregarAlCarrito(button) {
    let producto = button.parentElement;
    let nombre = producto.getAttribute("data-nombre");
    let precio = parseFloat(producto.getAttribute("data-precio"));

    carrito.push({ nombre: nombre, precio: precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    let carritoList = document.getElementById("carrito");
    let totalElement = document.getElementById("total");

    carritoList.innerHTML = "";
    totalElement.textContent = total.toFixed(2);

    carrito.forEach(function (item) {
        let listItem = document.createElement("li");
        listItem.textContent = item.nombre + " - $" + item.precio.toFixed(2);
        carritoList.appendChild(listItem);
    });
}