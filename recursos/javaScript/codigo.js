var contador=0;
function setElemento(contenedorInf,texto=null,imageIcono=null){
 
    var contenedorInfo=document.getElementById(contenedorInf);
    var div=document.createElement("div");
    var icono=document.createElement("div");
    var titulo=document.createElement("div");
    var dato=document.createElement("div");

    var h1Text=document.createElement("h1");
    var h1Dato=document.createElement("h1");
    var img=document.createElement("img");

    div.setAttribute("class","contInfo");
    icono.setAttribute("class","icono");

    titulo.setAttribute("class","titulo");
    dato.setAttribute("class","dato");
    h1Dato.setAttribute("id","dato"+contador);
 
    img.setAttribute("src",imageIcono);
    img.setAttribute("class","imageIcon");
    
 

    icono.appendChild(img);
    h1Text.innerHTML=texto;
    titulo.appendChild(h1Text);

    h1Dato.innerHTML=258;
    dato.appendChild(h1Dato);

    div.appendChild(icono);
    div.appendChild(titulo);
    div.appendChild(dato);
 
    contenedorInfo.appendChild(div);
    contador++;

  
    
}

/**
 * funcion encargada de obtener un servicio y mostrarlo en un componente de acuerdo al id que se le pasa por parametro
 * @param {url del web serive} url 
 * @param {campo del json a mostrar} campo 
 * @param {id del elemento donde se mostrara el dato obtenido} idElemento 
 */

 function getOneService(url,campo=null,idElemento=null){
  
    $.get(url,function(data){ 
        console.log(data.resultado[0].total);
       
    
      
     
    }).fail(function(){
        console.log("No se encontraron lo datos •_•");
     });
    
    
    }
    
  
 ///contenedores informativos vistaMedico
 setElemento("contenedorInfo","Hospitalizados","recursos/img/iconos/hospital.png");
 setElemento("contenedorInfo","Total de solicitudes","recursos/img/iconos/calendar.png");
 setElemento("contenedorInfo","Participantes dados de alta","recursos/img/iconos/corazon.png");
 setElemento("contenedorInfo","Solicitudes canceladas","recursos/img/iconos/cancelado.png");
 setElemento("contenedorInfo","Vinculaciones familiares","recursos/img/iconos/familia.png");
 setElemento("contenedorInfo","Vinculaciones pacientes","recursos/img/iconos/paciente.png");
 
 
getOneService("http://localhost:8080/salud/API/GET/totalVinculacionFamiliares/9991337889","total","dato4");
/*getOneService("https://salud.claro360.com/plataforma360/API/solicitudesAceptadas","total","dato1");
getOneService("https://salud.claro360.com/plataforma360/API/solicitudesRechazadas","total","dato2");
getOneService("https://salud.claro360.com/plataforma360/API/solicitudesCandeladas","total","dato3");*/
/*getOneService("","total","dato4");
getOneService("","total","dato5");
 */

var dato=document.getElementById("dato0");
dato.innerHTML="dato0";

function setGraficas(){
   
    var fechas=[];
    var totalPorFecha=[];
    $.get("http://localhost:8080/salud/API/GET/pacientesPorDia/9991337889",function(data){

         if(data.resultado!=null){
        
        for(var i=0;i<data.resultado.length;i++){

            totalPorFecha[i]=data.resultado[i].total;
            fechas[i]=data.resultado[i].date_created;
          }

        }else{
        
        totalPorFecha[0]=0;
        fechas[0]="";
       }
 
        var elementoG=document.getElementById("pacientesDiarios").getContext("2d");
        var graficaPacientesD=new Chart(elementoG,{
            type:"line",
            data:{
                
              labels:fechas,
              datasets:[{
                label:"Pacientes por día",
                data:totalPorFecha,
                backgroundColor:["#FDE3FF"],
                borderColor:["#EC3535"]
        
              }]
         
            },
            options:{
    
              scales:{
                yAxes:[{
                   ticks:{
                        beginAtZero: true,
                        fontSize: 10
                   } 
    
                }]
              }, responsive: true,
              maintainAspectRatio: false
           
            
              
            } 
         
          }); 
          


       
    }).fail(function(e){
      console.log("no se encontro");
      console.log(e);
    });
   

/*
    
/////--------
var elementoG=document.getElementById("GvinculacionP").getContext("2d");
    var graficaVinculacionP=new Chart(elementoG,{
        type:"bar",
        data:{
     
          labels:["dato1","dato2","dato3","dato4","dat5"],
          datasets:[{
            label:"Vinculación Pacientes",
            data:[10,20,30,25,89],
            backgroundColor:["#536cfd"],
            
            
          }]
     
        },
        options:{
          scales:{
            yAxes:[{
               ticks:{
                beginAtZero: true,
                 fontSize: 10,
                 
                 }
            }]
          }, responsive: true,
          maintainAspectRatio: false 
        } 
     
      });

      ///----------
      var elementoG=document.getElementById("GvinculacionF").getContext("2d");
     var graficaVinculacionF=new Chart(elementoG,{
        type:"bar",
        data:{
     
          labels:["dato1","dato2","dato3","dato4","dat5"],
          datasets:[{
            label:"Vinculación familiares",
            data:[10,20,30,25,89],
            backgroundColor:["#536cfd"]
            
          }]
     
        },
        options:{
          scales:{
            yAxes:[{
               ticks:{
                beginAtZero: true,
                 fontSize: 10,
                 
                 }
            }]
          }, responsive: true,
          maintainAspectRatio: false 
        } 
     
      });*/

      
}
$(document).ready(function() {
    var tabla=$('#dataTableDatosAlta').DataTable();
                                                                          
    $.get("http://localhost:8080/salud/API/GET/contactoPacientesAtendidos/9991337889",function(data){
       
        if(data.resultado!=null){
         for (var i=0;i<data.resultado.length;i++){
           

            tabla.row.add([
                data.resultado[i].nombre,
                "<a href='#'>"+data.resultado[i].telefono_responsable+"</a>",
                "<a href='#'>"+data.resultado[i].correo_contacto_responsable+"</a>",
                "<button type='button' class='btn btn-success btn-sm' style='margin-left:15%;'>Ver</button>"
            ]).draw();
        }

      }

    }).fail(function(){
        console.log("datos no encontrados •_•");
    });
 
} );


window.addEventListener("load",setGraficas);