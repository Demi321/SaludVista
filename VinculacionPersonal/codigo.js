
/**
 * 
 * @param {id del elemento donde se agregaran losmodulos} idElemento 
 * @param {color del modulo} colorModulo 
 * @param {Titulo del modulo} tituloModulo 
 * @param {numero de medicos} contador 
 */
function agregarModulo(idElemento,colorModulo="white",tituloModulo="",contador=0){
 
    var elemento=document.getElementById(idElemento);
    var divModulo=document.createElement("div");    
    var divTitulo=document.createElement("div");
    var divContador=document.createElement("div");
    var titulo=document.createElement("h1");
    var cantidadMedicos=document.createElement("h1");
    


    divModulo.setAttribute("class","modulo");
    divModulo.style.backgroundColor=colorModulo;

    divTitulo.setAttribute("class","moduloTitulo");
    titulo.innerHTML=tituloModulo;

    cantidadMedicos.innerHTML=contador+" Médicos";

    divContador.setAttribute("class","moduloContador");

    


    divTitulo.appendChild(titulo);
    divContador.appendChild(cantidadMedicos);

    divModulo.appendChild(divTitulo);
    divModulo.appendChild(divContador);
    elemento.appendChild(divModulo);

    



}

/**
 * 
 * @param {id del elemento el cual se agrandara} idElemento 
 * @param {id del elemento que desatara el evento} idBotonImg 
 */

function resize(idElemento,idBotonImg){
var flag=true;
    var elemento=document.getElementById(idElemento);
    var boton=document.getElementById(idBotonImg);

    boton.addEventListener("click",function(){
        if(flag){
            elemento.style.height="500px";
            boton.setAttribute("src","arriba.png");


            flag=false;

        }else if(flag==false){
            elemento.style.height="50px";
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
function setCodigoQr(idElemento,nameClass,nombreHospital="",urlImg=null){

    var elemento=document.getElementById(idElemento);
    var contenedorGeneral=document.createElement("div");
    var contenedorInfo=document.createElement("div");
    var contenedorQr=document.createElement("div");
    var titulo=document.createElement("h1");
    var subtitulo=document.createElement("h2");
    var parrafo=document.createElement("p");
    var parrafo2=document.createElement("p");
    var imagenQr=document.createElement("img");

    var clase=document.getElementsByClassName(nameClass);

    

    contenedorGeneral.setAttribute("class","contGeneralQr");
    contenedorGeneral.setAttribute("id","idContenedorGeneral");
    contenedorInfo.setAttribute("class","contenedorInfo");
    contenedorQr.setAttribute("class","contenedorQr");
    

    titulo.innerHTML="Código de hospital";
    subtitulo.innerHTML=nombreHospital;
   

    parrafo.innerHTML="Comparte este código para vincular a nuevas";
    parrafo.setAttribute("id","p1");
    parrafo.style.marginTop="25%";

    parrafo2.innerHTML="personas a tu organización";
    parrafo2.style.marginTop="-5%";
    imagenQr.setAttribute("src",urlImg);


    contenedorInfo.appendChild(titulo);
    contenedorInfo.appendChild(subtitulo);
    contenedorInfo.appendChild(parrafo);
    contenedorInfo.appendChild(parrafo2);
    
    contenedorQr.appendChild(imagenQr);



    contenedorGeneral.appendChild(contenedorInfo);
    contenedorGeneral.appendChild(contenedorQr);
    elemento.appendChild(contenedorGeneral);

    var contGerneralQr=document.getElementById("idContenedorGeneral");
    if(screen.width<=550){
       
        contGerneralQr.style.display="none";
        for(var i=0;i<clase.length;i++){
            clase[i].style.width="45%";
            clase[i].style.marginLeft="3.5%";
            
    
            }
    }else{
        contGerneralQr.style.display="display";
        for(var i=0;i<clase.length;i++){
        
        clase[i].style.width="15%";
        clase[i].style.marginLeft="2%";
        clase[i].style.fontSize="12px";

        }
    }

    
}

function setDataTable(idContenedorListaRegistro,idContenedorSinRegistros){

    var elemento=document.getElementById(idContenedorListaRegistro);
    var tituloListaMedicos=document.getElementById("tituloListaMedicos");
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
    var correo= document.createTextNode("Télefono");
    var telefono= document.createTextNode("Número de médico");

    contenedorDataTable.setAttribute("class","contenedorDataTable");
    tituloListaMedicos.style.display="block";

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
    var dataTable=$('#tablaRegistros').DataTable();

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