 




function showDataTable(){
    var dataTable=document.getElementById("idContDataTable");
    var sinRegistros=document.getElementById("idContSinDatos");
    
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
    for(var i=0;i<30;i++){
    datos[i]={"nombre":"Karina Sánchez Gonzalez"+i,"correo":"diana@gmail.com" ,"telefono":"5825121425","estado": "estable","diagnostico":"al 100","boton":"<i class='fas fa-phone phoneIcon'></i>","id":24};
      
    }
   


    if(datos.length!=0){
        dataTable.style.display="block";
        sinRegistros.style.display="none";

    var dataTable=$('#idDataTableAltas').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [
                
                {extend:'excel',title:"datos",className:"btn btn-success btn-sm",exportOptions: {columns: [1,2,3 ]} },
                {extend:'pdf',title:"datos",className:"btn btn-danger btn-sm",exportOptions: {columns: [1,2,3 ]}},
                {extend:'csv',title:"datos",className:"btn btn-primary btn-sm",exportOptions: {columns: [1,2,3 ]}},
            
            
            ],
           
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
                { "data": "telefono"} ,
                { "data": "boton"} 
            ],
            "order": [[1, 'asc']]
        },


    );


   let contador=0;
    $('#idDataTableAltas tbody').on('click', 'td.details-control', function () {
        var tr = $(this).parents('tr');
        var row = dataTable.row( tr );

 
           
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
            
        }
        else {
      
   
            var diaG="Contrary to popular belief";

       

            //class='tablaDetallesThead'
            var datos2=[];
            var aux2='<table style=" width: 100%;" id="idTablaDetalles'+contador+'">';


         
            var campos="<thead><tr><td class='camposT'>Fecha</td><td class='camposT'>Hora</td><td class='camposT'>Estado</td><td class='camposT'>Diagnóstico</td></tr></thead>";
            var datosTabla="";
            
            for(var i=0;i<6;i++){
                datos2[i]= {"Fecha":"28/11/2020","Hora":"20:58","Estado":"Grave","Diagnostico":diaG};
               }
               
             

               aux2=aux2+campos;

            for(var i=0;i<datos2.length;i++){
 
                datosTabla=datosTabla+"<tr><td class='camposT-td' >"+datos2[i].Fecha+"</td>"+"<td class='camposT-td'  >"+datos2[i].Hora+"</td>"+"<td class='camposT-td' >"+datos2[i].Estado+"</td>"+"<td class='camposT-td' style='text-align: center;'>"+datos2[i].Diagnostico+"</td></tr>";
                aux2=aux2+datosTabla;
                datosTabla="";
               
               
            }
          
            aux2=aux2+"</table>";
            
            

 
            row.child( aux2 ).show();
            tr.addClass('shown');

            let fileName="Diagnostico-"+row.data().nombre+"_Correo-"+row.data().correo+"_Telefono-"+row.data().telefono;

            

            $('#idTablaDetalles'+contador).DataTable( {
                dom: 'Bfrtip',
                buttons: [
                  
                    {extend:'excel',title:fileName,className:"btn btn-success btn-sm"},
                    {extend:'pdf',title:fileName,className:"btn btn-danger btn-sm"},
                    {extend:'csv',title:fileName,className:"btn btn-primary btn-sm"}
                    
                ]
            } );
            
            for(var i=0;i<3;i++)
            $('#idTablaDetalles'+contador).find("thead td:eq("+i+")").css({
                "width":"10%"
            });
            $(".pacientes_alta .dataTables_wrapper .dt-button").removeClass("dt-button");

            contador++;
            

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


 

 

