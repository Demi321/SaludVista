/*$(document).ready(

    function obtenerMaterias(){
        $.ajax({
            // la URL para la petición
            url : 'http://localhost:8080/blank/API/GET/ver_grupo_alumno',
        
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

);

function verHistorial(id_usuario){
    $.ajax({
        // la URL para la petición
        url : 'http://localhost:8080/blank/API/GET/alumno_historial/'+id_usuario,
    
        //data : { id_usuario : id_usuario },
    
        type : 'GET',
    
        dataType : 'json',
    
        success : function(response) {
            
           console.log(response)
           

        },
    
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    
    });
}*/