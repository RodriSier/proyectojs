function convertir(){
    var valore = parseInt(document.getElementById(valor).value);
    var resultado = 0;
    var dolar = 350;
    var euro = 400;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado);
    }
     else if (document.getElementById (dos).checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euro es: " + resultado);
     }     
     else{
        alert("Debes completar todos los requerimientos")
     }
}