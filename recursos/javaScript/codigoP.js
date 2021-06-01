/**
 * 
 * @param {id del elemento el cual sera agrandado para mostrar la linea del tiempo} idElemento 
 * @param {id del elemento que desatare el evento al hacer click} idEventElement 
 * @param {array cargado con todos los parrafos a mostrar en la linea del tiempo}arrayTexto
 */
 var flag=true;
function addTimeLine(idElemento,idEventElement,arrayTexto){
    
    
    
  
    var elemGeneral=document.getElementById("subContainer");

    var elemento=document.getElementById(idElemento);
    var boton=document.getElementById(idEventElement);
    var contenedor=document.createElement("div");
    var idsParrafos=[];
   
    boton.addEventListener("click",function(){
         
        if(flag){
            console.log("activo");
            elemento.style.height="77%";
            elemGeneral.style.height="90%";
             
            
            contenedor.setAttribute("class","contTimeLine");
            contenedor.setAttribute("id","contenedorTimeLine");
             var imgUltimaPosicion=document.createElement("img");
                imgUltimaPosicion.setAttribute("src","recursos/img/iconos/icono2.png");
                imgUltimaPosicion.setAttribute("id","ultimaPosicion"); 


            for(var i=0;i<arrayTexto.length;i++){
                var contenedorInfo=document.createElement("div");
                var contenedorImg=document.createElement("div");
                var contenedorParrafo=document.createElement("div");
                var img=document.createElement("img");
                var parrafo=document.createElement("p");

                contenedorInfo.setAttribute("class","contInfo");
                contenedorInfo.setAttribute("id","contInfo"+i);

                contenedorImg.setAttribute("class","contImg");
                contenedorImg.setAttribute("id","contImg"+i);

                contenedorParrafo.setAttribute("class","contParrafo");
                contenedorParrafo.setAttribute("id","contParrf"+i);

                img.setAttribute("src","recursos/img/iconos/icono.png");
                img.setAttribute("id","img"+i);
                 
                //evaluamos si es la ultima posición para poner la imagen circular sin la linea recta
                if(i==arrayTexto.length-1){
                  contenedorImg.appendChild(imgUltimaPosicion);
                }else{
                    contenedorImg.appendChild(img);
                }
                
               
                contenedorInfo.appendChild(contenedorImg);
                contenedorInfo.appendChild(contenedorParrafo);

                //asignamos el texto al parrafo
                parrafo.innerHTML=arrayTexto[i];
                parrafo.setAttribute("id","p"+i);  
                idsParrafos[i]="p"+i;
                
                contenedorParrafo.appendChild(parrafo);
                contenedorInfo.appendChild(contenedorParrafo);
                contenedor.appendChild(contenedorInfo);

            }



            contenedor.style.display="block";
            elemento.appendChild(contenedor);
    
            flag=false;
        }else if(flag==false){
            elemento.style.height="0%";
            if(screen.width<=500){
                elemGeneral.style.height="57%";
               
            }else{
                elemGeneral.style.height="25%";
            }
             
            

            console.log("desactivo");
             for(var i=0;i<idsParrafos.length;i++){
                    var parrafo=document.getElementById(idsParrafos[i]);
                    var contInfo=document.getElementById("contInfo"+i);
                    var contImg=document.getElementById("contImg"+i);
                    var contParrafo=document.getElementById("contParrf"+i);
                    
                    
                    parrafo.remove();
                    contInfo.remove();
                    contImg.remove();
                    contParrafo.remove();
                     
            }
            contenedor.remove();
            
            flag=true;
        }
        


    
 
    

    });


}

 