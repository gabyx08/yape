var cargarPagina = function(){
  $('.ingresa').keyup(validarInputs)
};

var validarInputs = function(){
  var $nombre = $('#nombre').val();
  var $email = $('#email');
  var $contraseña = $('#contraseña');
  var emailRegex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

  if($nombre.trim().length > 0){
    if ($contraseña.val().length === 6) {
      if (emailRegex.test($email.val())) {
        $('#crearCuenta').removeAttr("disabled");
        $('#crearCuenta').attr("class", "boton--amarillo btn");
      }
    }
  }
};

$(document).ready(cargarPagina);
