var cargarPagina = function(){
  $('.ingresa').keyup(validarDatos);
  $('#btnTarjeta').click(redirigirPassTarjeta);
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
        almacenarDatos(numeroTarjeta, mes, año);
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

var almacenarDatos = function(numeroTarjeta, mes, año){  
  localStorage.setItem('cardNumber', numeroTarjeta);
  localStorage.setItem('cardMonth', mes);
  localStorage.setItem('cardYear', año);
};

var redirigirPassTarjeta = function(e){
  e.preventDefault();
  location.href = 'passTarjeta.html';
};

$(document).ready(cargarPagina);
