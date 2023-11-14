const botonAvanz = document.getElementById("next-page");
const botonPrev = document.getElementById("prev-page");
const lista = document.getElementById("character-list");
const botones = document.getElementsByClassName("boton");
let paginaactual = 1;
pagina(paginaactual);

for (const boton of botones) {    
    boton.addEventListener("click",function(){
        if(boton.id=="next-page"){
            paginaactual++;
        }else if(boton.id=="prev-page") {
            paginaactual--;
        }
        if(paginaactual<=0){
            paginaactual=1;
        }
        vaciarLista();
       pagina(paginaactual);
    })
 
}

function vaciarLista(){
    const personajes = document.getElementsByClassName("personaje");
    console.log(personajes);
    let arrayPersonajes = Array.from(personajes);
    for (let i = 0; i < arrayPersonajes.length; i++) {
        lista.removeChild(arrayPersonajes[i]);
        
    }
    
}

function pagina(paginaactual){
    //console.log(paginaactual);
    fetch("https://rickandmortyapi.com/api/character/?page=" + paginaactual).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Error en la solicitud")
        }
    }).then(datos => {
     //   console.log(datos.results);
        datos.results.forEach(personaje => {
            var li = document.createElement('li');
            li.setAttribute('class', 'personaje');
            lista.appendChild(li);
            li.innerHTML = li.innerHTML + "<div ><img src=" + personaje.image + "><p><strong>Nombre:</strong>" + personaje.name + "</p><p><strong>Especie:</strong>" + personaje.species + "</p></div>";
        });
    })
    
}


//////////////////////////////////////////

