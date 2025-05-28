const valor= document.querySelector(".display")
let operacionesN=0;
let operacionesM=0;
let operacion=0;
let operador="";
let operando=false;

document.querySelector(".buttons") 
        .addEventListener("click", function(event) 
        {
            
            if (valor.value === "0" && event.target.classList.contains("numeros")) 
                {
                    console.log(event.target.classList.contains("numeros"))
                    valor.value=event.target.innerText
                    if(operando===false){
                        operacionesN=Number(valor.value)
                        console.log(typeof operacionesN, operacionesN)
                                        }
                    else{
                        operacionesM=Number(valor.value)
                        console.log(typeof operacionesM, operacionesM)
                    }
                }
            else if(valor.value!=="0"&& event.target.classList.contains("numeros")){
                valor.value+=event.target.innerText
                if(operando===false){
                    operacionesN=Number(valor.value)
                    console.log(typeof operacionesN, operacionesN)
                                    }
                else{
                    operacionesM=Number(valor.value)
                    console.log(typeof operacionesM, operacionesM)
                    }
            }
            else if(event.target.classList.contains("operaciones"))
                {
                    if(event.target.innerText!=="=" && event.target.innerText !== "c"){
                        
                        // 🟡 Si ya hay valores en N y M, realiza operación antes de cambiar operador
                        if(operacionesN !== 0 && operacionesM !== 0){
                            if(operador === "÷"){
                                operacionesN = operacionesN / operacionesM;
                            }
                            else if(operador === "*"){
                                operacionesN = operacionesN * operacionesM;
                            }
                            else if(operador === "-"){
                                operacionesN = operacionesN - operacionesM;
                            }
                            else if(operador === "+"){
                                operacionesN = operacionesN + operacionesM;
                            }
                            valor.value = operacionesN + "";
                            operacionesM = 0;
                        }
                        else {
                            valor.value = "0";
                        }

                        operador = event.target.innerText;
                        operando = true;
                        
                    }
                    
                    if(event.target.innerText==="c"){
                        operando=false;
                        operacionesM=0;
                        operacionesN=0;
                        valor.value="0";
                    }
                    else if(event.target.innerText==="="){
                        if(operador==="÷"){
                            valor.value=operacionesN/operacionesM + "";
                            console.log(typeof valor.value);
                        }
                        if(operador==="*"){
                            valor.value=operacionesN*operacionesM + "";
                            console.log(typeof valor.value);
                        }
                        if(operador==="-"){
                            valor.value=operacionesN-operacionesM + "";
                            console.log(typeof valor.value);
                        }
                        if(operador==="+"){
                            valor.value=operacionesN+operacionesM + "";
                            console.log(typeof valor.value);
                        }
                        operacionesN = Number(valor.value); // importante para que el resultado quede guardado
                        operacionesM = 0;
                        operando = false;
                    }
                }
            else if(event.target.classList.contains("borrar")){
                if(operando===false){
                    valor.value=valor.value.slice(0,-1);
                    operacionesN=Number(valor.value) 
                    console.log(operacionesN, operacionesM)
                }    
                else if(operando===true){
                    valor.value=valor.value.slice(0,-1);
                    operacionesM=Number(valor.value) 
                    console.log(operacionesM, operacionesM)
                }         
            }
        });