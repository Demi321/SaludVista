
function getTareas(id){


    $.get("http://localhost:8080/blank/API/GET/ver_tarea_alumno/"+id,function(request,estado){


        if(estado=="success"){

            console.log(request);
            var btnVerId=null;
            var tabla=$('#dataTable').DataTable();
            tabla.clear().draw();

           
           for(var i=0;i<request.tarea.length;i++){

                btnVerId="ver"+i;
                tabla.row.add([
                   
                    request.tarea[i].nombre_grupo,
                    request.tarea[i].nombre_materia,
                    request.tarea[i].descripcion,
                    request.tarea[i].tipo,
                    request.tarea[i].fecha_entrega,

                    "<td><img src='../componentes/img/ojo.png' width='30px' alt='ojo' data-toggle='tooltip' data-placement='top' title='Ver' style='cursor:pointer;' id='"+btnVerId+"'> &nbsp;"+
                    "<img src='../componentes/img/contacto.png' width='30px' alt='contacto' data-toggle='tooltip' data-placement='top' title='Contacto'  style='cursor:pointer;'></td>"
                   
                ]).draw();


                customModal(btnVerId,null,null,"modalVer","cerrarModalVer");

              }
 //<button type='button' class='btn btn-secondary btn-sm'>ver </button>
 //<button type='button' class='btn btn-success btn-sm'>Contacto</button>

 
        }else{
            alert("No se encontraron los datos •_•");
        }




    });



}