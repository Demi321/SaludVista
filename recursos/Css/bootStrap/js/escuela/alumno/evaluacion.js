
function getEvaluacionAlumno(id){


    $.get("http://localhost:8080/blank/API/GET/evaluacion_alumno/"+id,function(request,estado){
 
            console.log(request);       
            var tabla=$('#dataTable').DataTable();
            for(var i=0;i<request.evaluacion.length;i++){
                tabla.row.add([
                    request.evaluacion[i].nombre_grupo,
                    request.evaluacion[i].nombre_materia,
                    request.evaluacion[i].titulo_evaluacion,
                    request.evaluacion[i].descripcion,
                    request.evaluacion[i].fecha_entrega,
                    request.evaluacion[i].calificacion 
                   
                ]).draw();
              }
 
    }).fail(function(){
       console.log("No se encontraron lo datos •_•");
    });



}