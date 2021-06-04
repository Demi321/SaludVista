 
/**
 * 
 * @param {id del elemento el cual se agrandara} idElemento 
 * @param {id del elemento que desatara el evento} idBotonImg 
 */

function resize(idElemento,idBotonImg){
var flag=true;
    var elemento=document.getElementById(idElemento);
    var boton=document.getElementById(idBotonImg);
    var contFormularioMed=document.getElementById("contFormularioMed");

    boton.addEventListener("click",function(){
        if(flag){
            elemento.style.height="auto";
            boton.setAttribute("src","arriba.png");
            contFormularioMed.style.display="block";


            flag=false;

        }else if(flag==false){
            contFormularioMed.style.display="none";
            elemento.style.height="70px";
            boton.setAttribute("src","abajo.png");
         

            flag=true;
        }
        
    });

}

/**
 * 
 * @param {id del elemento donde se agregara el contenedor de qr} idElemento 
 * @param {nombre de la clase de los modulos la cual se hara más pequeña y se reducira el margin left} nameClass 
 * @param {nombre del hospital correspondiente} nombreHospital 
 * @param {ruta de la imagen del QR} urlImg 
 */
 

function setDataTable(idContenedorListaRegistro,idContenedorSinRegistros){

    var elemento=document.getElementById(idContenedorListaRegistro);
    //var contFormulario=document.getElementById("contListaMedicos");
    var elementoSinRegistros=document.getElementById(idContenedorSinRegistros);
    var contenedorDataTable=document.createElement("div");

    var table=document.createElement("table");
    var tbody=document.createElement("tbody");
    var thead=document.createElement("thead");
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var th4=document.createElement("th");
    var tr=document.createElement("tr");
    var nombre= document.createTextNode("Nombre");
    var apellido= document.createTextNode("Correo Electrónico");
    var correo= document.createTextNode("Teléfono");
    var telefono= document.createTextNode("Número de médico");

    contenedorDataTable.setAttribute("class","contenedorDataTable");
   // contFormulario.style.height="auto";

    th1.appendChild(nombre);
    th2.appendChild(apellido);
    th3.appendChild(correo);
    th4.appendChild(telefono);

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
    var dataTable=$('#tablaRegistros').DataTable({
        pageLength : 5,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']]
    });

    $(".dataTables_filter").addClass("float-right");
    for(var i=0;i<50;i++){

        dataTable.row.add([

            "David Jimenez Santiago",
            "davidjim97j@gmail.com",
            "5821251425",
            "75214585"

        ]).draw();
    }
   /* try{

    if(directorio_medico!=null){
        for(var i=0;i<directorio_medico.length;i++){

            dataTable.row.add([

                directorio_medico[i].nombre+" "+directorio_medico[i].apellido_paterno+" "+directorio_medico[i].apellido_materno,
                directorio_medico[i].correo,
                directorio_medico[i].telefono,
                "2512521452" 
            ]).draw();
        }

    }
    
    }catch(e){
        console.log("la variable 'directorio_medico' no se encuentra");
    }*/
 

   
    

}

