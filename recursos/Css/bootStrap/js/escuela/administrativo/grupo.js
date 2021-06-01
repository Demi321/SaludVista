/*$(document).ready(
    function obtenerMaterias(){
        $.ajax({
            // la URL para la petición
            url : 'http://localhost:8080/blank/API/GET/ver_grupo',
        
            //data : { id : 123 },
        
            type : 'GET',
        
            dataType : 'json',
        
            success : function(response) {
               console.log(response)
            },
        
            error : function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
        
        });
    }

);*/

 
function obtenerGupos(){
  $.get("http://escuela.claro360.com/plataforma360/API/GET/ver_cursos",function(request){
    
    var elementosOcultos=["botonMuestraModal","contTable"];
    var idEditar=null;
    var idEliminar=null;
    var tabla=$('#dataTable').DataTable();     

    tabla.clear().draw();     
    

    for(var i=0;i<request.grupo.length;i++){

      idEditar="editar"+i;
      idEliminar="eliminar"+i;
      
      var idGrupo=request.grupo[i].id_grupo;
      tabla.row.add([
          request.grupo[i].nombre_grupo,
          request.grupo[i].nivel,
          request.grupo[i].id_sucursal,
          " <button type='button' class='btn btn-success btn-sm' id='"+idEditar+"'>Editar</button>&nbsp;"+
          "<button type='button' class='btn btn-danger btn-sm' id='"+idEliminar+"'>Eliminar</button>"
          
         
      ]).draw();
      var arrayTipoElemento=[];
      arrayTipoElemento[0]="horarioGrupo";
      arrayTipoElemento[1]=idGrupo;
       
      modal("modalEditar",idEditar,"cerrarEditar",elementosOcultos,arrayTipoElemento);
      modal("modalEliminar",idEliminar,"cerrarModalEliminar");
      
    
    }
 

  }).fail(function(){
    console.log("No se encontraron lo datos •_•");
 });
}

 
 
function horarioGrupo(id_grupo){
  
  $.get("http://localhost:8080/blank/API/GET/ver_horario_grupo/"+id_grupo,function(request,estado,xhr){
 
           var tabla=$('#dataTableEditar').DataTable();
           console.log(request);
            
           var size=request.horario.length;
           
              tabla.clear().draw();
              for(var i=0;i<size;i++){
                tabla.row.add([
                    request.grupo[0].nombre_grupo,
                    request.horario[i].nombre_materia,
                    request.horario[i].lunes,
                    request.horario[i].martes,
                    request.horario[i].miercoles,
                    request.horario[i].jueves,
                    request.horario[i].viernes,
                    "<button type='button' class='btn btn-danger btn-sm'>Eliminar</button>"
                   
                ]).draw();
               
              }
             
             // tabla.row.add(["dav"]).draw();
              //var aux=0;
              //tabla.row(':eq('+aux+')').remove().draw();
              


      }).fail(function(){
        console.log("No se encontraron lo datos •_•");
     });

 

    }


 