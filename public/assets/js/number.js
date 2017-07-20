var cargarPagina = function(){
  $("#numero").keyup(validarNumero);
  $("#formNumero").submit(agregarNumero);
};

var validarNumero = function() {
  var $numero = $("#numero");
  var $boton = $("#btnNumero");
  if($numero.val().length === 10 ){
      validarCheckbox(); //valida el checkbox ANTES modificar el input
      $("#terminos").click(validarCheckbox); //valida el checkbox DESPUES modificar input y hacer click en el ckecbox
   } else {
     $boton.attr("disabled", true);
  }
};

var validarCheckbox = function(){
  var $boton = $("#btnNumero");
  var $checkbox = $("#terminos");
  //Con el método .prop() se obtiene el valor de la propiedad checked con jquery
  if($checkbox.prop("checked")){
      $boton.removeAttr("disabled");
      $boton.attr("class", "boton--amarillo btn");
   } else {
     $boton.attr("disabled", true);
  }
};

var agregarNumero = function(e){
  e.preventDefault();
  var telefono = $("#numero").val();
  var terminos = $("#terminos").prop("checked");

  $.post("http://localhost:3000/api/registerNumber",{
    "phone": telefono,
    "terms": terminos
  }).then(function(res){
    console.log(res);
    var codigoApi = res.data.code.toString();
    var telefonoApi = res.data.phone;
     if(res.message === "Usuario válido"){
        swal( codigoApi ,"Codigo de validación","success"); //alert con codigo de validacion
        $(document).on("click",$(".confirm")[0],redireccionarPag);
        guardarDatos(codigoApi,telefonoApi)
    } else {
      swal(res.message , "Ingresa otro número :)", "error"); //alert con mensaje de error "el telefono ya existe"
    }
  }).catch(function(error){
    console.log(error);
  })
};

var redireccionarPag = function(){
  var html = "codigo.html"
  location.href = html;
}

var guardarDatos = function(codigoApi, telefonoApi){
  localStorage.setItem('codigo', codigoApi);
  localStorage.setItem('telefono', telefonoApi);
}

$(document).ready(cargarPagina);
