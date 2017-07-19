var cargarPagina = function(){
  $("#numero").keyup(validarNumero);
  $("#formNumero").submit(agregarNumero)
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
     if(res.message === "Usuario válido"){
       var codigo = res.data.code.toString();
        swal( codigo ,"Codigo de validación","success")
        $(document).on("click",$(".confirm")[0],redireccionarPag)
    } else {
      swal(res.message , "Ingresa otro número :)", "error");
    }
  }).catch(function(error){
    console.log(error);
  })
};

var redireccionarPag = function(){
  location.href = "codigo.html";
}
$(document).ready(cargarPagina);
