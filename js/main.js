$( "#signupform" ).submit(function( event ) {
$.ajax({
    url: "https://api.ommqro.mx/registro.php", 
    jsonp: "callback",
    dataType: "jsonp",
    data: 
        $('#signupform').serialize(),
        
    
    success: procesarRespuestaRegistroForm
});
    
    
    
  event.preventDefault();
});

$( "#loginform" ).submit(function( event ) {
$.ajax({
    url: "https://api.ommqro.mx/registro.php", 
    jsonp: "callback",
    dataType: "jsonp",
    data: 
        $('#loginform').serialize(),
            
    success: procesarRespuestaLoginForm
});
  event.preventDefault();
});
function procesarRespuestaRegistroForm($data){
    console.log($data);    
    if($data['error']) {
        $('#signupalert').html("<p> <b>Error: " + $data['error'] + "</b></p><span>" + $data['desc'] +"</span>");
        $('#signupalert').removeClass( "alert-success" ).addClass( "alert-danger" );
        $('#signupalert').show();
    }
    else if($data['uju']) {
                
        $('#signupalert').html(
                "¡Yei! acabamos de registrar tu email: <b>" + $data['email'] +
                "</b> en nuestra base de datos. <br/>Estamos listos para " +
                "<a id='comenzarlink' href='#' onclick='comenzarExamen();'>comenzar con el examen</a>."
                );
        $('#signupalert').removeClass( "alert-danger" ).addClass( "alert-success" );
        $('#signupalert').show();
        
        Participante.email = $data['email'];
        Participante.frase = $('#registro-frase').val();
        
    }
    
}

function procesarRespuestaLoginForm($data){
    console.log($data);    
    if($data['error']) {
        $('#login-alert').html("<p> <b>Error: " + $data['error'] + "</b></p><span>" + $data['desc'] +"</span>");
        $('#login-alert').removeClass( "alert-success" ).addClass( "alert-danger" );
        $('#login-alert').show();
    }
    else if($data['uju'] === "2016") {
        $('#login-alert').html(
                "¡Bienvenido, <b>" + $data['email'] +
                "<br/>Estamos listos para " +
                "<a id='comenzarlink' href='#' onclick='comenzarExamen();'>comenzar con el examen</a>."
                );
        $('#login-alert').removeClass( "alert-danger" ).addClass( "alert-success" );
        $('#login-alert').show();

        Participante.email = $data['email'];
        Participante.frase = $('#login-frase').val();
    }
    
}

function mostrarLoginForm(){
    $('#signupbox').hide();
    $('#loginbox').show();   
}

function mostrarRegistro(){
    $('#loginbox').hide();
    $('#signupbox').show();
}


function comenzarExamen(){
    $('#loginbox').hide();
    $('#signupbox').hide();
    
    pintar_problemas(Problemas);
    MathJax.Hub.Typeset();
    
    $('#msform-alert').show();    
}

function enviarRespuestas(){

  datos_array = {};
  datos_array["id"] = Participante.id;
  datos_array["email"] = Participante.email;
  datos_array["frase"]    = Participante.frase;
  datos_array["accion"]    = "actualizarRespuestas";
  datos_array["respuestas"]   = JSON.stringify(res);
  
   $.get( "https://api.ommqro.mx/registro.php", datos_array, function( data ) {
    console.log( data );
	if(data['uju'] == 3001){
            $('#msform-alert').html('¡Listo! Acabamos de guardar las siguientes respuestas:<br/>\n\
                                    <pre>'+data['respuestas']+'</pre>\n\
                                    asociadas a tu email:' + data['email']);
           $('#msform-alert').removeClass('alert-info').addClass('alert-success');
	}
	else if(data['error'] == 1004){
            $('#msform-alert').html('<b>¡Atención!</b> El email y la frase secreta que acabas de enviarnos no coinciden con nuestros registros.<br/>\n\
                                    <b>no guardamos las respuestas que nos enviaste</b>. Por favor comunícate con nosotros para resolver este problema.');
           $('#msform-alert').removeClass('alert-success').addClass('alert-danger');            
	}
        else{
            $('#msform-alert').html('<b>¡Atención!</b> Un error inesperado ocurrió:<br/>\n\
                                    <b>no guardamos las respuestas que nos enviaste</b>. Por favor comunícate con nosotros para resolver este problema.\n\
                                    <br> por favor indícanos este mensaje de error:\n\
                                    <pre>'+JSON.stringify(data, null, 2)+'</pre>');
           $('#msform-alert').removeClass('alert-success').addClass('alert-danger');            
        }
	
   }, "json");  

}
