function pdf(){
  
        var contenedor=document.getElementById("perfilLaboral");

        html2pdf().set({
                pagebreak: { mode: 'avoid-all', before: '#page2el' }
              }).from(contenedor).save();
 
    
}
 

