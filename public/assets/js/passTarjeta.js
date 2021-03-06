var cardNumber = localStorage.getItem('cardNumber');

var cargarPagina = function(){
  mostrarTarjeta();
  $('#pass').keyup(validarPass);
  $('#btnPass').click(registrarTarjeta)
};

var mostrarTarjeta = function(){
    var ultimoDigitos = cardNumber.substr(-4);
    $('#ultimosNumeros').html(ultimoDigitos);
};

var validarPass = function(){
  if($('#pass').val().length == 4){
    $('#btnPass').removeAttr("disabled");
    $('#btnPass').attr("class", "boton--amarillo btn");
  }else{
    $('#btnPass').attr("disabled", true);
  }
};

var registrarTarjeta = function(e){
  e.preventDefault();
  var userId= localStorage.getItem('telefono');
  var cardMonth = localStorage.getItem('cardMonth');
  var cardYear = localStorage.getItem('cardYear');
  var cardPassword = $('#pass').val();

  console.log(userId, cardNumber, cardMonth, cardYear, cardPassword )

  $.post("https://yape-validacion.herokuapp.com/api/registerCard",{
    'phone' : userId,
    'cardNumber' : cardNumber,
    'cardMonth' : cardMonth,
    'cardYear' : cardYear,
    'cardPassword' : cardPassword
  }).then(function(res){
    console.log(res);
     if(res.message === "Tarjeta añadida correctamente"){
        swal(res.message,"","success");
        $(document).on("click",$(".confirm")[0],redireccionarPag);
    } else {
      swal("Error", res.message , "error");
    }
  }).catch(function(error){
    console.log(error);
  })
};

var redireccionarPag = function(){
  location.href="hola.html";
};

$(document).ready(cargarPagina);
