
 ///muestra contenedor hora de comida

 function showContenedorHoraComida(idElemento){
    let elemento=document.getElementById(idElemento);
    elemento.addEventListener("click",function(){
        let contenedorComida=document.getElementById("contenedorHoraComidaPerfilLaboral");
        contenedorComida.style.display="block";
    });

}
