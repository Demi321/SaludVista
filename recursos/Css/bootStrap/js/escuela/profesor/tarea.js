/*$(document).ready(
    function obtenerHorario(){
        var id_usuario = 1;
        $.ajax({
            // la URL para la petición
            url : 'http://localhost:8080/blank/API/GET/tareas_profesor/'+id_usuario,
        
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

function getTaeasProfesor(id_usuario){
 $.get("http://localhost:8080/blank/API/GET/tareas_profesor/"+id_usuario,function(request,status){
 
        console.log(request);
        console.log(request.grupo[0].nombre_grupo);
        console.log(request.tareas[0].descripcion);

        var idBoton=null;

        var tabla=$('#dataTableEvaluacion').DataTable();
        tabla.clear().draw();
        for(var i=0;i<request.tareas.length;i++){
            idBoton="calificar"+i;
             tabla.row.add([
                 request.tareas[i].nombre_grupo,
                 request.tareas[i].nombre_materia,
                 request.tareas[i].titulo_evaluacion,
                 request.tareas[i].descripcion,
                 request.tareas[i].tipo,
                 request.tareas[i].fecha_entrega, 
                 "<td><button type='button' class='btn btn-success btn-sm' id='"+idBoton+"'>Calificar</button></td>" 
                
             ]).draw();

             
             modal("modalCalificacion",idBoton,"cerrarModalCalificacion");
           }
 
 }).fail(function(){
    console.log("No se encontraron lo datos •_•");
 });

}




function obtenerTarea(){
    var id_grupo = 11;
    var id_evaluacion = 1;
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/calificar_tarea/'+id_grupo+'/'+id_evaluacion,
    
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

function verTarea(){
    var id_usuario = 12;
    var id_evaluacion = 1;
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/ver_tarea_alumno/'+id_usuario+'/'+id_evaluacion,
    
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

function verGrupoProfesor(){
    var id_usuario = 1;
    
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/grupo_profesor/'+id_usuario,
    
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

function verTareaEntregada(){
    var id_usuario = 12;
    
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/ver_tarea_entregada_alumno/'+id_usuario,
    
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

function calificarAlumno(){
    var id_usuario = 12;
    var id_grupo = 11;
    var id_materia = 7;
    
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/calificar_alumno/'+id_usuario+'/'+id_grupo+'/'+id_materia,
    
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