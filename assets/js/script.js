let ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green'; // Establece el fondo a verde por defecto

function pintar() {
    ele.style.backgroundColor = 'yellow';
}

ele.addEventListener("click", pintar);