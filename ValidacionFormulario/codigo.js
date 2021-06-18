
function validaDatosFormulario(idContenedorFormulario,elementosExcluidos=null) {

    let elementos = document.querySelectorAll(idContenedorFormulario + " input");
    let selects = document.querySelectorAll(idContenedorFormulario + " select");
    var flag=false;
    
    if(elementosExcluidos!==null){

        for (var i = 0; i < elementos.length; i++) {

            //validamos que el elemento no este en elementos excluidos
            for (var j = 0; j < elementosExcluidos.length; j++) {
                if(elementos[i].name===elementosExcluidos[j]){
                    flag=true;
                    console.log(flag);
                }
            }
         //si no se encontro el elemento se le pone el evento para validar formulario   
        if(flag===false){
            elementos[i].addEventListener("blur", function () {
               
          
                //validamos si es texto
                if (this.value.trim() === "") {
    
                    if(document.getElementById("l"+this.name)!==null){
                        var label=document.getElementById("l"+this.name);
                        label.style.display="block";
                    }
                     
                    this.style.border = "1px solid rgb(255, 116, 116)";
                   
                } else if (this.value.trim() !== "") {
    
                    if(document.getElementById("l"+this.name)!==null){
                        var label=document.getElementById("l"+this.name);
                        label.style.display="none";
                    }
                    this.style.border = "1px solid rgb(221, 219, 219)";
    
                }

                 //validamos si es numero 
                 if (this.placeholder.includes("Teléfono")) {
                    var labelTelefono=null;
                    if(document.getElementById("l"+this.name)!==null){
                        labelTelefono=document.getElementById("l"+this.name);
                    
                    }

                    if(this.value.length<10){
                        if(isNaN(this.value)===false){
                            if (labelTelefono !== null) {
                                labelTelefono.innerHTML = "El teléfono debe ser de 10 dígitos";
                                labelTelefono.style.display = "block";
                            }
    
                            this.style.border = "1px solid rgb(255, 116, 116)";

                        }else{
                            labelTelefono.innerHTML = "No es un número valido";
                            labelTelefono.style.display = "block";
                            this.style.border = "1px solid rgb(255, 116, 116)";
                        }
                       
                        console.log("N "+ isNaN(this.value));


                    } else{
                        if (labelTelefono !== null) {
                            labelTelefono.style.display = "none";
                        }
                        this.style.border = "1px solid rgb(221, 219, 219)";
                    }
                    
                
    
                }

    
            });
        } 

           flag=false;
        }
        
    }else{
    
    for (var i = 0; i < elementos.length; i++) {
     elementos[i].addEventListener("blur", function () {
            //validamos si es numero y 
            if (this.type === "number"&&this.placeholder.includes("Teléfono")) {
                var labelTelefono=null;
                if(document.getElementById("l"+this.name)!==null){
                    labelTelefono=document.getElementById("l"+this.name);
                
                }

                if (this.value.length < 10) {

                    if(labelTelefono!==null){
                        labelTelefono.innerHTML="El teléfono debe ser de 10 dígitos";
                        labelTelefono.style.display="block";
                    }
                    this.style.border = "1px solid rgb(255, 116, 116)";

                } else if (this.value.length > 10) {

                    if(labelTelefono!==null){
                        labelTelefono.innerHTML="El número no puede superar los 10 dígitos";
                        labelTelefono.style.display="block";
                     }
                    this.style.border = "1px solid rgb(255, 116, 116)";
                    


                } else {
                    if(labelTelefono!==null){
                        labelTelefono.style.display="none";
                       }
                    this.style.border = "1px solid rgb(0, 204, 17)";
                    
                }

            }
      
            //validamos si es texto
            if (this.value === "" && this.type !== "number") {

                if(document.getElementById("l"+this.name)!==null){
                    var label=document.getElementById("l"+this.name);
                    label.style.display="block";
                }
                 
                this.style.border = "1px solid rgb(255, 116, 116)";
               
            } else if (this.value !== "" && this.type !== "number") {

                if(document.getElementById("l"+this.name)!==null){
                    var label=document.getElementById("l"+this.name);
                    label.style.display="none";
                }
                this.style.border = "1px solid rgb(0, 204, 17)";

            }


        });
  
    }

}

    for (var i = 0; i < selects.length; i++) {
            selects[i].addEventListener("blur", function () {
            var labelSelect=null;
            if(document.getElementById("l"+this.name)!==null){
                labelSelect=labelTelefono=document.getElementById("l"+this.name);
                
            }
            if (this.value === "") {
                if(labelSelect!=null){
                    labelSelect.style.display="block";
                }

                this.style.border = "1px solid #FF8F8F";

            } else {
                if(labelSelect!=null){
                    labelSelect.style.display="none";
                }
                this.style.border = "1px solid #00B336";


            }

        });

    }

}

function validaCamposVacios(idContenedorFormulario) {

    var flagInputs = true;
    var falagSelects = true;
    let elementos = document.querySelectorAll(idContenedorFormulario + " input");
    let selects = document.querySelectorAll(idContenedorFormulario + " select");

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].value === "") {
            flagInputs = false;
            console.log("vacio");
        }

    }

    for (var i = 0; i < selects.length; i++) {
        if (selects[i].value === "") {
            falagSelects = false;

        }

    }

    if (flagInputs && falagSelects) {
        return true;
    } else {
        return false;
    }

}