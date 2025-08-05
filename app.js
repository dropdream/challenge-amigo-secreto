// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//arreglo de amigos
let amigos = [];

//arreglo para que no se repitan los amigos
let indiceArray = [];

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

//Funcion para sortear amigos
function sortearAmigo() {
    cantidadAmigos = amigos.length;

    if (cantidadAmigos > 0) {
        if (indiceArray.length === amigos.length) {
            alert('Se han sorteado todos los amigos');
            return;
        }

        //Indice para sortear amigo
        let indice = Math.floor(Math.random() * amigos.length);

        if (indiceArray.includes(indice)) {
            //Vuelve a ejecutar funcion para intentar con otro ya que este amigo ya salio.
            sortearAmigo();
        } else {
            //Guardamos en un array el amigo sorteado para que no salga nuevamente
            indiceArray.push(indice);

            let nombre = amigos[indice];

            //Ocultamos listado y mostramos el resultado del sorteo
            document.getElementById('listaAmigos').setAttribute('hidden', true);
            document.getElementById('realizarSorteo').setAttribute('hidden', true);
            
            //Boton que repite sorteo hasta que se agotan los nombres
            document.getElementById('resultado').innerHTML = ` <p>${nombre}</p>
                                                            <br>
                                                            <button class="button-draw" onclick="sortearAmigo()" id="repetirSorteo">Elegir nuevamente</button>`;
        }

    } else {
        //Alerta si el arreglo esta vacio
        alert('Debe ingresar amigos para realizar el sorteo');
    }

}