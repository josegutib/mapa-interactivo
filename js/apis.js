//&#9166

let mapa
 // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
const posicionCentral = {lat: -34.592868, lng: -58.419979}

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  mapa = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.592868, lng: -58.419979},
          zoom: 8
        });


    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
