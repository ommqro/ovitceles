function pintar_problemas(problemas){
	var transform = 
	   {tag:'fieldset', children:[
		   {tag:'h2',class:'fs-title',html:"Problema ${id}"},
		   {tag:'h3',class:'fs-subtitle',html:"Selecciona sólo una respuesta"},
		   {tag:'p', class:'mate enunciado', html:'${enunciado}'} ,

		   {tag:'img', class:'figura', src:'${imagen}', alt:'${imagen}'} ,
		   {tag:'div',class:'radio', children:[
			       {tag:'input', id:'radio-${id}-A', type:'radio', name:'problema-${id}', value:'A'},
			       {tag:'label', for:'radio-${id}-A',html:'${opciones.A}'},

			       {tag:'input', id:'radio-${id}-B', type:'radio', name:'problema-${id}', value:'B'},
			       {tag:'label', for:'radio-${id}-B',html:'${opciones.B}'},

			       {tag:'input', id:'radio-${id}-C', type:'radio', name:'problema-${id}', value:'C'},
			       {tag:'label', for:'radio-${id}-C',html:'${opciones.C}'},

			       {tag:'input', id:'radio-${id}-D', type:'radio', name:'problema-${id}', value:'D'},
			       {tag:'label', for:'radio-${id}-D',html:'${opciones.D}'},

			       {tag:'input', id:'radio-${id}-E', type:'radio', name:'problema-${id}', value:'E'},
			       {tag:'label', for:'radio-${id}-E',html:'${opciones.E}'},

		    ]},

		    {tag:'input',type:'button',name:'previous',class:"previous action-button",value:'Anterior'},
		    {tag:'input',type:'button',name:'next',class:"next action-button",value:'Siguiente'},
	  ]}; 
	console.log(problemas);
	var aux = document.createElement('div');
	aux.innerHTML = json2html.transform(problemas,transform);
	while(aux.children[0]) {
		document.getElementById("msform").appendChild(aux.children[0]);
	}
	aux = document.createElement('fieldset');
	$(aux).prop('id','fin');
		document.getElementById("msform").appendChild(aux);
                
return;
}