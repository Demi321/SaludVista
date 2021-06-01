$(document).ready(
    function obtenerMaterias(){
        $.ajax({
            // la URL para la petición
            url : 'http://localhost:8080/blank/API/GET/ver_materia',
        
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