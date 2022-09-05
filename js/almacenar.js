document.addEventListener ("DOMContentLoaded", function(){
    document.getElementById('archivador').addEventListener('submit',save);
    document.getElementById('saved').addEventListener('submit',clean);
    mostrarlista()

})

var lista = []

if (a = localStorage.getItem("lista") == null){
    localStorage.setItem("lista", JSON.stringify(lista))
}



function save(evento){
    evento.preventDefault();

    var contenido = document.getElementById("item").value;
    var listalocal = JSON.parse(localStorage.getItem("lista"));


    listalocal.push(contenido);
    console.log(listalocal);
    localStorage.setItem("lista", JSON.stringify(listalocal));
    window.location.reload()
}

function clean(){
    localStorage.clear("lista")
    window.location.reload()
}


var listaux = JSON.parse(localStorage.getItem("lista"))

function mostrarlista(){
    
    let htmlContentToAppend = ""; 
    for (let i = 0; i < (listaux.length) ; i++){
        htmlContentToAppend += 
        `
        <li class="list-group-item">` + listaux[i] + `</li>
        `
    }
    document.getElementById("contenedor").innerHTML = htmlContentToAppend;

}