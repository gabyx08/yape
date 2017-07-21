var telefonoUsuario = localStorage.getItem('telefono');
var usuario = {};
var cargarPagina = function(){
  $('.ingresa').keyup(validarInputs);
  $('#crearCuenta').click(enviarDatos);
};

var validarInputs = function(){
    usuario.nombre = $('#nombre').val();
    usuario.email = $('#email').val();
    usuario.contraseña = $('#contraseña').val();

  var emailRegex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

  if (usuario.contraseña.length === 6) {
    if (emailRegex.test(usuario.email)){
      if (usuario.nombre.trim().length > 0){
        $('#crearCuenta').removeAttr("disabled");
        $('#crearCuenta').attr("class", "boton--amarillo btn");
      }else{
        $('#crearCuenta').attr("disabled", true);
      }
    }else{
      $('#crearCuenta').attr("disabled", true);
    }
  }else{
    $('#crearCuenta').attr("disabled", true);
  }
};

var enviarDatos = function(e){
  e.preventDefault();
  console.log(usuario)
  console.log(telefonoUsuario)

  $.post("http://localhost:3000/api/createUser",{
    "phone": telefonoUsuario,
    "name": usuario.nombre,
    "email": usuario.email,
    "password": usuario.contraseña
  }).then(function(res){
    console.log(res);
    location.href = "ok.html";
  }).catch(function(error){
    console.log(error);
  })

};

$(document).ready(cargarPagina);
