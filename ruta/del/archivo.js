const valor = document.querySelector(".display");
let operacionesN = 0;
let operacionesM = 0;
let operador = "";
let operando = false;

document.querySelector(".buttons").addEventListener("click", function (event) {
    const esNumero = event.target.classList.contains("numeros");
    const esOperacion = event.target.classList.contains("operaciones");
    const texto = event.target.innerText;

    // Si es número
    if (esNumero) {
        if (valor.value === "0" || operando === true) {
            valor.value = texto;
            operando = false;
        } else {
            valor.value += texto;
        }

        if (operador === "") {
            operacionesN = Number(valor.value);
        } else {
            operacionesM = Number(valor.value);
        }
    }

    // Si es operación (+ - x ÷)
    else if (esOperacion && texto !== "=" && texto !== "c") {
        // Si ya hay dos números y un operador, resolver primero
        if (operacionesN !== 0 && operacionesM !== 0) {
            if (operador === "+") {
                operacionesN = operacionesN + operacionesM;
            } else if (operador === "-") {
                operacionesN = operacionesN - operacionesM;
            } else if (operador === "*") {
                operacionesN = operacionesN * operacionesM;
            } else if (operador === "÷") {
                operacionesN = operacionesN / operacionesM;
            }
            valor.value = operacionesN + "";
            operacionesM = 0;
        }

        // Convertir 'x' en '*'
        operador = texto === "x" ? "*" : texto;
        operando = true;
    }

    // Si es igual "="
    else if (esOperacion && texto === "=") {
        operacionesM = Number(valor.value);

        if (operador === "+") {
            valor.value = operacionesN + operacionesM;
        } else if (operador === "-") {
            valor.value = operacionesN - operacionesM;
        } else if (operador === "*") {
            valor.value = operacionesN * operacionesM;
        } else if (operador === "÷") {
            valor.value = operacionesN / operacionesM;
        }

        operacionesN = Number(valor.value);
        operacionesM = 0;
        operador = "";
        operando = false;
    }

    // Limpiar "c"
    else if (esOperacion && texto === "c") {
        operacionesN = 0;
        operacionesM = 0;
        operador = "";
        operando = false;
        valor.value = "0";
    }

    // Borrar último dígito
    else if (event.target.classList.contains("borrar")) {
        valor.value = valor.value.slice(0, -1) || "0";
        if (operador === "") {
            operacionesN = Number(valor.value);
        } else {
            operacionesM = Number(valor.value);
        }
    }
});