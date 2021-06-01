
/**
 * funcion encargada de obtener un servicio y mostrarlo en un componente de acuerdo al id que se le pasa por parametro
 * @param {url del web serive} url 
 * @param {campo del json a mostrar} campo 
 * @param {id del elemento donde se mostrara el dato obtenido} idElemento 
 */

function getOneService(url,campo=null,idElemento=null){
  
$.get(url,function(status){ 
    console.log(status);
   

    console.log(status.respuesta[0][campo]);

     var elemento=document.getElementById(idElemento);
     elemento.innerHTML=""+status.respuesta[0][campo];
 
}).fail(function(){
    console.log("No se encontraron lo datos •_•");
 });


}

