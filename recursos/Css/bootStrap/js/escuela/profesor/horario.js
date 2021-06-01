/*$(document).ready(
    function obtenerHorario(){
        var id_usuario = 1;
        $.ajax({
            // la URL para la petición
            url : 'http://localhost:8080/blank/API/GET/horario_profesor/'+id_usuario,
        
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

 
 
function getHorarioProfesor(id){
 
    $.get("http://localhost:8080/blank/API/GET/horario_profesor/"+id,function(request,estado,xhr){
        
          
              console.log(request);
              console.log(estado);
              console.log(xhr);
          
              
              var tabla=$('#dataTableHorarios').DataTable();

              for(var i=0;i<request.horario.length;i++){
                tabla.row.add([
                    request.horario[i].nombre_grupo,
                    request.horario[i].nombre_materia,
                    request.horario[i].lunes,
                    request.horario[i].martes,
                    request.horario[i].miercoles,
                    request.horario[i].jueves,
                    request.horario[i].viernes,
                    "<button type='button' class='btn btn-success btn-sm'>Iniciar Sesión</button> "
                ]).draw();
              }
  
  
      }).fail(function(){
        console.log("No se encontraron lo datos •_•");
     });;
      
}
