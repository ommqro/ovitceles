$( "#signupform" ).submit(function( event ) {
$.ajax({
    url: "https://t.ommqro.mx/registro.php", 
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
    url: "https://t.ommqro.mx/registro.php", 
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
                "</b> en nuestra base de datos. <br/>Estamos listos para" +
                "<a id='comenzarlink' href='#' onclick='mostrarLoginForm();'>comenzar con el examen</a>"
                );
        $('#signupalert').removeClass( "alert-danger" ).addClass( "alert-success" );
        $('#signupalert').show();
        
    }
    
}

function procesarRespuestaLoginForm($data){
    console.log($data);    
    if($data['error']) {
        $('#login-alert').html("<p> <b>Error: " + $data['error'] + "</b></p><span>" + $data['desc'] +"</span>");
        $('#login-alert').removeClass( "alert-success" ).addClass( "alert-danger" );
        $('#login-alert').show();
    }
    else if($data['uju']) {
        $('#login-alert').html(
                "¡Bienvenido, <b>" + $data['email'] +
                "<br/>Estamos listos para" +
                "<b>comenzar con el examen</b>"
                );
        $('#login-alert').removeClass( "alert-danger" ).addClass( "alert-success" );
        $('#login-alert').show();
        
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