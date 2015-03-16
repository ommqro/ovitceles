function resumen(){
	console.log("resumen");
	var fin = document.getElementById('msform').lastChild;
  $(fin).html('<h2>Resumen</h2> <p>Las siguientes son las respuestas que elegiste para los problemas. <b>F</b> significa no contestado.<br> Presiona <b>Volver</b> si deseas corregir alguna, o <b>Enviar</b> si ya estás listo.</p>');  

	res = {};
     for (i=1; i<=15; i++){
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
       
	  s = document.createElement('input')
	  $(s).prop('id','respuesta-'+help);
	  $(s).prop('type','text');
	  $(s).prop('value',res[help]);
	  $(s).prop('readonly','true');
	  fin.appendChild(s);
     }

  fin.appendChild(document.createElement('input'));
  $(fin.lastChild).prop('class','previous action-button');
	$(fin.lastChild).prop('type','button');
	$(fin.lastChild).prop('value','Volver');

  
  fin.appendChild(document.createElement('input'));
  $(fin.lastChild).prop('class','submit action-button');
	$(fin.lastChild).prop('type','button');
	$(fin.lastChild).prop('value','Enviar');

	return;
}