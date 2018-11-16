lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {

      // Creo un array con todos los input
      const inputs = [
        document.getElementById('direccion'),
        document.getElementById('desde'),
        document.getElementById('hasta'),
        document.getElementById('agregar')
      ];

      // Creo el circulo para generar el area límite
      const circulo = new google.maps.Circle( {
        center: posicionCentral,
        radius: 20000
      });

      const opciones = {
        bounds: circulo.getBounds()
      }

      inputs.forEach(function(input){
        const search = new google.maps.places.Autocomplete(input, opciones)
        // search.bindTo('bounds',mapa)
        // // autocomplete.setOptions({strictBounds: true});
        // mapa.setCenter(posicionCentral)
        // search.Autocomplete.setBounds(areaLimite.getBounds());

      })

        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
  }
    /*
    function autocompletar () {

   let autocomplete = new google.maps.places.Autocomplete($('#direccion')[0], { types: ['geocode'] });

   autocomplete.bindTo('bounds', mapa);



 }
    */
    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
      const tipoDeLugar = document.getElementById('tipoDeLugar').value;

      var service = new google.maps.places.PlacesService(mapa);
      service.nearbySearch({
        location: posicion,
        radius: 1000,
        type: [tipoDeLugar]
      }, function(results, status){
          marcadorModulo.marcarLugares(results, status)
      });

        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca
  }
})()
