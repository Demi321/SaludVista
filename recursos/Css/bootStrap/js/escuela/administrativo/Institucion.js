 
 
function getHistorialAlumno(id){
     
    $.get("http://localhost:8080/blank/API/GET/alumno_historial/"+id,function(request,estado,xhr){
        
      
              var tabla=$('#dataTableHistorialAlumno').DataTable();

              for(var i=0;i<request.historial.length;i++){
                tabla.row.add([
                    request.historial[i].id_usuario,
                    request.historial[i].nombre_materia,
                    request.historial[i].nombre_periodo,
                    request.historial[i].recurse,
                    request.historial[i].calificacion
                   
                ]).draw();
              }
  
  
      }).fail(function(){
        console.log("No se encontraron lo datos •_•");
     });
      
}

