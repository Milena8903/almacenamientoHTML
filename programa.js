//Crear un eventListener
let botonAlmacenar = document.getElementById("btnAlmacenar");

//Asociar el eventListener
//la funcion en el segundo parametro puede estar definida de 3 maneras
/* 1. Haciendo un callback llanmando a la funcion
botonAlmacenar.addEventListener('click', ejemplo )

function ejemplo(){

}
*/

/* 2. Utilizado una funcion anónima y colocarla directam. dentro del parámetro
botonAlmacenar.addEventListener('click', funtion(){

} )
*/

//3. Funciones de tipo flecha
botonAlmacenar.addEventListener('click', ()=>{
    //coloco lo que quiero q suceda cuado se hace click en el boton
    //console.log("Estoy respondiendo");

    //Almacenar un dato en sessionStorage
    sessionStorage.setItem('nombre', 'Paulo');
    sessionStorage.setItem('apellido', 'Coronado');

    //Ahora con el local Storage
    localStorage.setItem('nombre', 'Paulo');
    localStorage.setItem('apellido', 'Coronado');
} );

//Se decalara
let botonBorrar = document.getElementById("btnBorrar");
//Se utiliza
botonBorrar.addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();
})

/* 1 Foma

//Recorrer el sessionnStorage y el localStore
//Mostrando las varialbes como una fila en la tabla del DOM
function contruirFilas(){

    //Se hace un for que recorra todas las filas que hayan
    for(let i=0; i<window.sessionStorage.length; i++){
    //agregue la fila al elelemento q es cuerpo tabla
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    //Ahi 3 formas para contruir las filas
    let fila = document.createElement("tr");

        ///Celda 1 con el valor de la clave
    let celda = document.createElement("td");
    //agregando info, se hizo con el inner
    //ahora se agrega creando un node de texto
    //mostrando el valor que tiene guardado en el session
    let texto = document.createTextNode(sessionStorage.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);
   

        //celda 2 con el valor de la clave
     //filas q existan en el local y session storage 
     celda = document.createElement("td");
    //obtener id de esa clave
    let valor = sessionStorage.getItem(sessionStorage.key(i));
    texto = document.createTextNode(valor);
    //a esta celde agreguela el texo y agreguela a la fila
    celda.appendChild(texto);
    //agregar celda a fila
    //agregue un hijo(nodo), q va a ser una celda
    fila.appendChild(celda);
    //en el cuerpo de la tabla agregue un hijo llamado fila
    cuerpoTabla.appendChild(fila);
    }

    ///Session storage, 
    //1 forma copiando y modificando el for anterior
    for(let i=0; i<window.localStorage.length; i++){
        let cuerpoTabla = document.getElementById("cuerpoTabla");
        let fila = document.createElement("tr");
    
            ///Celda 1 con el valor de la clave
        let celda = document.createElement("td");
        let texto = document.createTextNode(localStorage.key(i));
        celda.appendChild(texto);
        fila.appendChild(celda);
         
            //celda 2 con el valor de la clave
         celda = document.createElement("td");
        let valor = localStorage.getItem(localStorage.key(i));
        texto = document.createTextNode(valor);
        celda.appendChild(texto);
        fila.appendChild(celda);
        cuerpoTabla.appendChild(fila);
        }
}
*/

/* Segunda forma*/
function contruirFilas(){

    //Crear un arreglo con las fuentes de datos
    let fuentes = [localStorage, sessionStorage];

    //meto un for dentro de otro for para repetir
    for(let k=0; k<fuentes.length; k++){

        let miFuente = fuentes[k];

        for(let i=0; i<miFuente.length; i++){

            //La tercera forma
            //utilizar funciones de js para insertar notos en una pag
            //js tiene unos nodos específicos

            //tomo la tabla
            let cuerpoTabla = document.getElementById("cuerpoTabla");

            //voy insertando las funciones específicas
            //creando fila
            let fila = cuerpoTabla.insertRow(i);
            //a esa fila le creo una celda 
            let celda = fila.insertCell(0);
            //creo el texto
            let texto = document.createTextNode(miFuente.key(i));
            //le agrego el texto a la celda
            celda.appendChild(texto);

            celda = fila.insertCell(1);
            texto = document.createTextNode(miFuente-getItem(miFuente.key(i)));
            celda.appendChild(texto);
            /*
            //Ahora la segunda forma
            
            //Dejo la table y puedo inyectar código html en esa tabla
            let cuerpoTabla = document.getElementById("cuerpoTabla");

            let clave = miFuente.key(i);
            let valor = miFuente.getItem(miFuente.key(i));

            //coja el html q esta en el cuerpo de la tabla y agreguele
            //cadenas de texto prepocesadas
            //agregue una colunma y cierra la fila
             // cuerpoTabla.innerHTML = cuerpoTabla.innerHTML + `<tr><td>${clave}</td><td>${valor}</td></tr>`

             //reduciendo el código anterior
             cuerpoTabla.innerHTML += `<tr><td>${clave}</td><td>${valor}</td></tr>`;
            */

            /*
            let cuerpoTabla = document.getElementById("cuerpoTabla");
            let fila = document.createElement("tr");
    
            ///Celda 1 con el valor de la clave
            let celda = document.createElement("td");
            let texto = document.createTextNode(miFuente.key(i));
            celda.appendChild(texto);
            fila.appendChild(celda);
         
            //celda 2 con el valor de la clave
            celda = document.createElement("td");
            let valor = miFuente.getItem(miFuente.key(i));
            texto = document.createTextNode(valor);
            celda.appendChild(texto);
            fila.appendChild(celda);
            cuerpoTabla.appendChild(fila);
            }
            */
    }
}
}

contruirFilas();