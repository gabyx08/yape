var cargarPagina = function(){
  $('.ingresa').keyup(validarDatos);

}

var validarDatos = function(){
  var numeroTarjeta = $('#numeroTarjeta').val();
  var mes = $('#mes').val();
  var año = $('#año').val();

  if(numeroTarjeta.length == 16){
    if(mes >= 1 && mes <= 12){
      if (año>=17 && año<=24) {
        $('#btnTarjeta').removeAttr("disabled");
        $('#btnTarjeta').attr("class", "boton--amarillo btn");
      }else{
        $('#btnTarjeta').attr("disabled", true);
      }
    }else{
      $('#btnTarjeta').attr("disabled", true);
    }
  }else{
    $('#btnTarjeta').attr("disabled", true);
  }
};

$(document).ready(cargarPagina);
