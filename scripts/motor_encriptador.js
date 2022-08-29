function evaluarPalabra(){
    var texto= document.querySelector('#input').value;
    if(texto.includes('á')||texto.includes('é')||texto.includes('í')||texto.includes('ó')||texto.includes('ú')){
        alert('Por favor, no use letras con acentos');
        return 1;
    }
    if(texto != texto.toLowerCase()){
        alert('Por favor, no use letras en mayúsculas');
        return 2;
    }
    especiales=['°','|','#','$','%','&','/','(',')','=','?','¡','¿',',','.','-','{','}','[',']','+','!','*','/','+','-','_',':',';','¨','*','"',"'"];
    hayEspecial=false;
    for(let caracter of especiales){
        if(texto.includes(caracter)){
            alert('Por favor, no use carácteres especiales');
            hayEspecial=true;
            break;
        }
    }
    if(hayEspecial){
        return 3;
    }
    return 0;
}
function encriptarTexto(){
    numero= evaluarPalabra();
    if(numero!=0){
        console.log(numero)
        return
    }
    var texto= document.querySelector('#input').value;
    var textoEncriptado;
    var textoEncriptado= texto.replaceAll("e","enter")
                        .replaceAll('i','imes')
                        .replaceAll('a','ai')
                        .replaceAll('o','ober')
                        .replaceAll('u','ufat');
    document.querySelector("#output").value = textoEncriptado;
    document.getElementById("fondo-pregunton").style.display = "none";
    document.getElementById("container-output-respuesta").style.display = "inline";
}
function desencriptarTexto(){
    numero= evaluarPalabra();
    if(numero!=0){
        console.log(numero)
        return
    }
    var texto= document.querySelector('#input').value;
    var textoEncriptado;
    var textoEncriptado= texto.replaceAll("enter","e")
                        .replaceAll('imes','i')
                        .replaceAll('ai','a')
                        .replaceAll('ober','o')
                        .replaceAll('ufat','u');
    document.querySelector("#output").value = textoEncriptado;
    document.getElementById("fondo-pregunton").style.display = "none";
    document.getElementById("container-output-respuesta").style.display = "inline";
}
function copiar(){
    let textoCopiado= document.querySelector("#output");
    textoCopiado.select();
    document.execCommand('copy');
}