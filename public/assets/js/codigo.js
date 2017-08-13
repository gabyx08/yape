var contador=21;
var telefonoUsuario = localStorage.getItem('telefono');
var codigoValidacion = localStorage.getItem('codigo');

var cargarPagina = function(){
  var tempo = setInterval(temporizador, 1000);
  mostrarTelefonoUsuario();
  $("#codigoHtml").keyup(validarLongitudCodigo);
};

var temporizador = function(tempo){
  contador--;
  if(contador >= 0){
    $("#tiempo").html(contador);
  } else {
       clearInterval(tempo);
       obtenerCodigoNuevo();
  }
};

var mostrarTelefonoUsuario = function(){
  $("#telefonoHtml").html(telefonoUsuario);
  $("#telefonoHtml").attr("class", "tel");
};

var validarLongitudCodigo = function(){
  var codigoUsuario = $("#codigoHtml");

  if(codigoUsuario.val().length == 6){
    validarCodigo(codigoUsuario)
  }
};

var validarCodigo = function(codigoUsuario){

    if(codigoUsuario.val() == codigoValidacion){
      location.href = "usuario.html";
    }else{
      codigoUsuario.val("");
      Materialize.toast('Codigo Incorrecto', 3000);
    }
};

var obtenerCodigoNuevo = function(){
  $.post("https://yape-validacion.herokuapp.com/api/resendCode",{
    "phone": telefonoUsuario,
  }).then(function(res){
    console.log(res);
    var codigoApi = res.data.toString();
    localStorage.setItem('codigo', codigoApi);
    codigoValidacion = localStorage.getItem('codigo');
    swal( codigoValidacion ,"Código Nuevo","success"); //alert con codigo de validacion
  }).catch(function(error){
    console.log(error);
  })
    contador = 21;
};

$(document).ready(cargarPagina);
