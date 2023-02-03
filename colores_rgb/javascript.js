let boton_origen;
let ventana1;
let ventana2;
let ventana3;
let ventana4;
let ventana5;
let ventana6;
let ventana7;

window.onload = enload();

function cambiar(){
    let url = document.location.href;
    let params = url.split('?')[1].split('&');
    let data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    foto = data.name;
    color = "imagenes/" + foto + ".jpg";
    document.body.style.background = color;
}

function cambiar_color(){
    cambio = document.getElementById("cambio").value;

}

function fondo(){
    cambio = document.getElementById("cambio").value;

}

function letras(){
    cambio = document.getElementById("cambio").value;

}

function enlaces(){
    cambio = document.getElementById("cambio").value;

}

function mod_url(html_name){
    url = html_name + '.html';
    ventana1 = window.open(url, "Imagen completa", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function mod_url(foto){
    url = 'coloresRGB.html?name=' + encodeURIComponent(foto);
    ventana1 = window.open(url, "Imagen completa", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}