var cargarPagina = function(){
  $("#numero").change(validarNumero);
  $("#formNumero").submit(agregarNumero)
};

var validarNumero = function() {
  var $numero = $("#numero");
  var $boton = $("#btnNumero");
  var $checkbox = $("#terminos");
  if($numero.val().length === 10 ){
       validarCheckbox(); //valida el checkbox ANTES modificar el input
      $checkbox.click(validarCheckbox); //valida el checkbox DESPUES modificar input y hacer click en el ckecbox
   } else {
     $boton.attr("disabled", true);
  }
}

var validarCheckbox = function(){
  var $boton = $("#btnNumero");
  var $checkbox = $("#terminos");
  //Con el método .prop() podemos obtener el valor de la propiedad checked con jquery
  if($checkbox.prop("checked")){
      $boton.removeAttr("disabled");
   } else {
     $boton.attr("disabled", true);
  }
}

var agregarNumero = function(e){
  e.preventDefault();
  alert("hola")
}

$(document).ready(cargarPagina);
