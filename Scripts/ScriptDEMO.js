//FORMAS DE DECLARAR VARIABLES
const pi = '3.1415'
var nombre = "Marcelo"
let ApellidoPaterno = 'Vasquez'
let ApellidoMaterno = "Artola"

var concatenacionmala = nombre + ApellidoPaterno + ApellidoMaterno
var concatenacion = nombre +' '+ ApellidoPaterno  +' '+ ApellidoMaterno
console.log(typeof concatenacionmala, concatenacionmala, concatenacion)

var concatenacion2 = `<p>${nombre} ${ApellidoPaterno} ${ApellidoMaterno}</p>`
console.log(concatenacion2)  

// document.body.innerHTML = concatenacion2;
// document.head.innerHTML = "<p>Marcelo Vasquez</p>"

// EXISTEN 10 TIPOS DE VARIABLES



//getElementById()
var respuesta =  document.getElementById("parrafo");
console.log(respuesta)

//querySelector()
var SelectorDeConsultas = document.querySelector("h1")
console.log(SelectorDeConsultas)

//querySelectorAll()

const listaItems = document.querySelector(".menu")
console.log(listaItems)
console.log(listaMenu());


function listaMenu(){
    
    const listarElementos = document.querySelectorAll("ul > li");
    //Esta funcion retorna un objeto
    console.log (listarElementos)
    //Esta codigo recorre los elementos del objeto uno por uno e imprime cada uno de los elementos
    listarElementos.forEach((item) => {
        item.innerHTML = `${nombre}<h1>marcelo</h1>`
        console.log(item)
    });

}

function Retroceder(){
    const 
}
