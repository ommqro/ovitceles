$( "#signupform" ).submit(function( event ) {
$.ajax({
    url: "http://t.ommqro.mx/registro.php", 
    jsonp: "callback",
    dataType: "jsonp",
    data: 
        $('#signupform').serialize(),
        
    
    success: procesarRespuestaRegistroForm
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

function mostrarLoginForm(){
    $('#signupbox').hide();
    $('#loginbox').show();
    
    
}