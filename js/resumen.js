function resumen(){
	console.log("resumen");
	var fin = document.getElementById('msform').lastChild;
  $(fin).html('<h2>Resumen</h2>\n\
        <p>\n\
        <a href="#btnSync" id="btnSync" onclick="resumen();" class="btn btn btn-info">Presiona aquí <span class="glyphicon glyphicon-refresh"></span></a>\n\
        para actualizar el resumen de tus respuestas.\n\
        <br/><br/><b>F</b> significa no contestado</p>');

	res = {};
     for (i=1; i<=28; i++){
	  var s;
       
       var help = "";
       if(jQuery( 'input[name=problema-'+i+'-a]:checked' ).val()){
         help = i+"a";
       }
       else if (jQuery( 'input[name=problema-'+i+'-b]:checked' ).val()){
         help = i + "b";
       }
       else {help = i + "f";}
       
	   console.log(
       res[help] =
          jQuery( 'input[name=problema-'+i+'-a]:checked' ).val()
       || jQuery( 'input[name=problema-'+i+'-b]:checked' ).val()
       || "F");
       
	  s = document.createElement('input');
	  $(s).prop('id','respuesta-'+help);
	  $(s).prop('class','alert-success');          
	  $(s).prop('type','text');
	  $(s).prop('value',res[help]);
	  $(s).prop('readonly','true');
	  fin.appendChild(s);
     }

    var s = '<p><a id="btnEnviar" class="btn btn btn-success" href="#btnEnviar" onclick="enviarRespuestas()"><span class="glyphicon glyphicon-floppy-open"></span> Presiona aquí</a>\n\
                 para enviar tus respuestas, <b>como aparecen en el resumen actual</b>.<p>';
    var msgEnviar = document.createElement('div');
    msgEnviar.innerHTML = s;
    fin.appendChild(msgEnviar);
    
	return;
}