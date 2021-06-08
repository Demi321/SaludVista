 




function showDataTable(){
    var dataTable=document.getElementById("idContDataTable");
    var sinRegistros=document.getElementById("idContSinDatos");
    
    dataTable.style.display="block";
    sinRegistros.style.display="none";
 
	var datos=[];  
   
    if(typeof solicitudes !=="undefined"){

	    $.each( solicitudes, (i, solicitud) => {
    	
            if( info_servicio.id === solicitud.id_destino && solicitud.id_estado === "7" ){ //cambiar de 7 a 8 (se deja en 7 solo para probar)
	    
                datos[i]={"nombre":solicitud.nombre_paciente+" "+solicitud.apellidop_paciente+" "+solicitud.apellidom_paciente,"correo":solicitud.correoAlta ,"telefono":solicitud.telefonoAlta,"office": "desconocido","extn": "5421"};
   

            }   
        } );
    
    }else{
    console.log("la variable solicitudes no esta definida •_•");
    }


    $.post("https://salud.claro360.com/plataforma360_dev/API/plataforma360/medico/obtener_diagnostico_paciente");
  
    //DATOS DE PRUEBA
    for(var i=0;i<30;i++)
    datos[i]={"nombre":"Karina Sánchez Gonzalez","correo":"diana@gmail.com" ,"telefono":"5825121425","estado": "estable","diagnostico":"al 100","id":24};
   


    if(datos.length!=0){

    var dataTable=$('#idDataTableAltas').DataTable(
        {
            
            data:datos,
            "columns": [
                {
                    "class":          'details-control',
                    "Nombre":      false,
                    "data":           null,
                    "defaultContent": ''
                },
                { "data": "nombre"},
                { "data": "correo" },
                { "data": "telefono"} 
            ],
            "order": [[1, 'asc']]
        },


    );

 

    //Evento click 
    $('#idDataTableAltas tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = dataTable.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
          
        }
        else {
            // Open this row
            console.log();

          /*  var datos2=[];
            var aux2='<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;overflow:auto;">';
            var fecha="<tr class='fecha'><td>Fecha</td>";
            var hora="<tr class='hora'><td>Hora</td>";
            var estado="<tr class='estado'><td>Estado</td>";
            var diagnostico="<tr class='diagnostico'><td>Diagnostico</td>";

            for(var i=0;i<6;i++){
                datos2[i]= {"Fecha":"28/11/2020","Hora":"20:58","Estado":"Grave","Diagnostico":"mal"};
 
            }
           
            for(var i=0;i<datos2.length;i++){
                fecha=fecha+"<td class='tdBorder'>"+datos2[i].Fecha+"</td>";
                hora=hora+"<td class='tdBorder'>"+datos2[i].Hora+"</td>";
                estado=estado+"<td class='tdBorder'>"+datos2[i].Estado+"</td>";
                diagnostico=diagnostico+"<td class='tdBorder'>"+datos2[i].Diagnostico+"</td>";

            }


            fecha=fecha+"</tr>";
            hora=hora+"</tr>";
            estado=estado+"</tr>";
            diagnostico=diagnostico+"</tr>";

            aux2=aux2+fecha+hora+estado+diagnostico+"</table>";*/
            
            
            ////
            var datos2=[];
            var aux2='<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;overflow:auto;">';
            var fecha="<tr class='fecha'><td>Fecha</td>";
            var hora="<tr class='hora'><td>Hora</td>";
            var estado="<tr class='estado'><td>Estado</td>";
            var diagnostico="<tr class='diagnostico'><td>Diagnostico</td>";

            for(var i=0;i<6;i++){
                datos2[i]= {"Fecha":"28/11/2020","Hora":"20:58","Estado":"Grave","Diagnostico":"mal"};
 
            }
           
            for(var i=0;i<datos2.length;i++){
                fecha=fecha+"<td class='tdBorder'>"+datos2[i].Fecha+"</td>";
                hora=hora+"<td class='tdBorder'>"+datos2[i].Hora+"</td>";
                estado=estado+"<td class='tdBorder'>"+datos2[i].Estado+"</td>";
                diagnostico=diagnostico+"<td class='tdBorder'>"+datos2[i].Diagnostico+"</td>";

            }


            fecha=fecha+"</tr>";
            hora=hora+"</tr>";
            estado=estado+"</tr>";
            diagnostico=diagnostico+"</tr>";

            aux2=aux2+fecha+hora+estado+diagnostico+"</table>";


            ////

 
            row.child( aux2 ).show();
            tr.addClass('shown');

        }
    } );


    $(".dataTables_filter").addClass("float-right");
 
    
  }else{
      console.log("No hay datos para mostrar *_*");
  }



}























function setDataTable(idContenedorListaRegistro,idContenedorSinRegistros){

    var elemento=document.getElementById(idContenedorListaRegistro);
    
    var elementoSinRegistros=document.getElementById(idContenedorSinRegistros);
    var contenedorDataTable=document.createElement("div");

    var table=document.createElement("table");
    var tbody=document.createElement("tbody");
    var thead=document.createElement("thead");
    var th0=document.createElement("th");
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var th4=document.createElement("th");
    var tr=document.createElement("tr");
    var accion= document.createTextNode("");
    var nombre= document.createTextNode("Nombre");
    var apellido= document.createTextNode("Correo Electrónico");
    var correo= document.createTextNode("Teléfono");
    var telefono= document.createTextNode("CampoPrueba");

    contenedorDataTable.setAttribute("class","contenedorDataTable");
    
    th0.appendChild(accion);
    th1.appendChild(nombre);
    th2.appendChild(apellido);
    th3.appendChild(correo);
    th4.appendChild(telefono);

    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);

    table.setAttribute("class","table");
    table.setAttribute("id","tablaRegistros");


    
    elementoSinRegistros=document.getElementById(idContenedorSinRegistros);
    elementoSinRegistros.remove();


    table.appendChild(thead);
    table.appendChild(tbody);


    contenedorDataTable.appendChild(table);
    elemento.appendChild(contenedorDataTable);
    var dataTable=$('#tablaRegistros').DataTable({ responsive: true});

    $(".dataTables_filter").addClass("float-right");
    
    try{

        if(solicitudes!=undefined){
            solicitudes[0].nombre_paciente+" "+solicitudes[0].apellidop_paciente +" "+ solicitudes[0].apellidom_responsable
             

           
         
            $.each( solicitudes, (i, solicitud) => {
      
                if( info_servicio.id === solicitud.id_destino && solicitud.id_estado === "8" ){
                    dataTable.row.add([
                        solicitud.nombre_paciente +" " +solicitud.apellidop_paciente+" "+solicitud.apellidom_paciente,
                        solicitud.correoAlta,
                        solicitud.telefonoAlta,
                        "prueba"
        
                    ]).draw();
                     
                }
            } );
       
        }else{
            console.log("no denfinido");
        }
    
    }catch(e){
        console.log("No se encontraron los datos. •_•");
    }


    

 }


 

 
