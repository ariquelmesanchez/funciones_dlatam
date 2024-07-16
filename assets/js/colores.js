function changeToBlack(event) {
    event.target.style.backgroundColor = 'black';
}

// Agregar evento de clic a cada div
document.getElementById('contenedor1').addEventListener('click', changeToBlack);
document.getElementById('contenedor2').addEventListener('click', changeToBlack);
document.getElementById('contenedor3').addEventListener('click', changeToBlack);
document.getElementById('contenedor4').addEventListener('click', changeToBlack);

// Variable global para guardar el color
let color;

// Función para manejar la tecla presionada
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            color = 'pink';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 's':
            color = 'orange';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'd':
            color = 'lightblue';
            document.getElementById('key').style.backgroundColor = color;
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('gray');
            break;
        case 'e':
            createNewDiv('brown');
            break;
    }
});

// Función para crear un nuevo div con un color específico
function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.marginTop = '20px';
    document.body.appendChild(newDiv);
}