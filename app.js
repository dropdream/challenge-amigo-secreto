// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//arreglo de amigos
let amigos = [];

//Funcion que añade amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (!nombreAmigo) {
        alert('Debe ingresar el nombre de un amigo');
        return;
    } else {
        //Se añade nombre al array de amigos
        amigos.push(nombreAmigo);

        //Muestra listado abajo
        mostrarAmigos();


        console.log(amigos);
    }
}

//Funcion para mostrar amigos en listado
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    //Limpiamos lista
    listaAmigos.innerHTML = '';

    //Recorremos y añadimos el listado
    for (let i = 0; i < amigos.length; i++) {
        let listado = document.createElement('li');
        listado.textContent = amigos[i];
        listaAmigos.appendChild(listado);
        document.getElementById('amigo').value = "";
    }
}

// Función para sortear amigos
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    let resultado = document.getElementById('resultado');

    if (cantidadAmigos > 0) {
        // Índice para sortear amigo
        let indice = Math.floor(Math.random() * cantidadAmigos);
        let nombre = amigos[indice];

        // Elimina el amigo sorteado del arreglo
        amigos.splice(indice, 1);

        // Si ya no quedan amigos, oculta el botón
        if (amigos.length === 0) {
            resultado.innerHTML = `
                <p>${nombre}</p>
                <br>
                <button class="button-draw" onclick="repetirSorteo()" id="repetirSorteo">Reiniciar sorteo</button>
            `;
            alert('Se han sorteado todos los amigos');
        } else {
            // Si aún quedan amigos, solo muestra el nombre sorteado
            resultado.innerHTML = `<p>${nombre}</p>`;
        }
    } else {
        alert('Debe ingresar amigos para realizar el sorteo');
    }
}

// Función que permite reiniciar el sorteo 
function repetirSorteo() {
    // Limpia todo
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
