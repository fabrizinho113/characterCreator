/*
    Crear un algoritmo en el que se pueda crear un personaje y se pueda ingresar los siguientes datos:
    
    -Nombre
    -Sexo
    -Clase

    El menu tiene que permitir: crear, ver, modificar y/o borrar personajes como tambien tener una salida (opcion de SALIR).
    Para modificar o borrar algun personaje, se pide el nombre del personaje de forma exacta.

*/


document.addEventListener("DOMContentLoaded", function () {
    

    //Funcion del menu 

    function menu(){
        let opcion = prompt(`Menu: \n A- Crear un personaje \n B- Ver personajes creados \n C- Modificar nombre del personaje \n D- Borrar personaje \n E- Exit`);

        return opcion.toLowerCase();
    }


    

    //Personaje

    class Personaje {
        constructor(nombre, sexo, clase) {
            this.nombre = nombre;
            this.sexo = sexo;
            this.clase = clase;
        }

        if(nombre){
            document.getElementById('nombre').innerHTML = nombre;
        }
        if(sexo){
            document.getElementById('sexo').innerHTML = sexo;
        }
        if(clase){
            document.getElementById('clase').innerHTML = clase;
        }
    }

    //Creacion de personaje

    function crearPersonaje(){

        let nombre = prompt('Ingrese el nombre de su personaje: ');
        let sexo = parseInt(prompt('Seleccione el sexo de su personaje: \n 1 - Masculino \n 2 - Femenino \n'));
        let clase = parseInt(prompt('Seleccione una clase: \n 1. Warrior \n 2. Priest \n 3. Archer'));
        
        if(sexo == 1){ sexo = "Masculino";}
        if(sexo == 2){ sexo = "Femenino";}
        if(clase == 1){ clase = "Warrior";}
        if(clase == 2){ clase = "Priest";}
        if(clase == 3){ clase = "Archer";}

        return new Personaje(nombre, sexo, clase);

    }

    class Lista {


        constructor(personajes){
            this.personajes = personajes;
        }

        //Agregar personaje
        agregar() {
            let personaje = crearPersonaje();
            this.personajes.push(personaje);
        }

        //Borrar personaje por su nombre
        borrar(nombre){
            //Posicion dentro del array, por ahora esta fuera
            let contador = -1; // array position = -1;

            //Reemplaza el valor de contador si se encuentra al personaje
            for(let personaje of this.personajes){
                if(personaje.nombre == nombre){
                    contador = this.personajes.indexOf(personaje);
                    break;
                }
            }

            //Validacion para saber si el personaje fue creado.
            if(contador == -1){
                alert("El personaje no se encuentra en la lista");
            } else {
            //  Se corta y reemplaza
                this.personajes = this.personajes.slice(0, contador).concat(this.personajes.slice((contador + 1)));
            }
        }

        modificar(nombre){
            //Posicion dentro del array, por ahora esta fuera
            let contador = -1;
            let opcion;

            //Ubicar 
            for(let personaje of this.personajes){
                if(personaje.nombre == nombre){
                    contador = this.personajes.indexOf(personaje);
                    break;
                }
            }

            if(contador == -1){
                alert("El personaje no se encuentra en la lista");
                return;
            }

            opcion = parseInt(prompt("Cual propiedad desea cambiar? \n 1- Nombre \n 2- Clase "))

            do{
                if(opcion == 1){
                    this.personajes[contador].nombre = prompt("Ingrese el nuevo nombre del personaje: ");
                    alert("El nombre del personaje ha sido cambiado con exito.");
                    return;
                }
            }while(opcion = parseInt(prompt("La opcion que ingreso no es valida, intente nuevamente. \n Cual propiedad desea cambiar? \n 1- Nombre \n 2- Clase ")));
        }

        //Lista de personajes
        listar() {
            let lista = `Lista de personajes: \n`;

            for(let personaje of this.personajes){
                lista += personaje.nombre + " - " + personaje.sexo + " - " + personaje.clase + "\n";
            }

            alert(lista);
        }

    }

    //Inicio del algoritmo
    alert(`Bienvenido/a a la creacion de personaje!`);
    
    //Nueva lista vacia para almacenar personajes
    let lista = new Lista ([]);
    //Menu
    let opcion = menu();

    while(opcion != "e"){

        switch (opcion) {

            //Crear personaje
            case "a":
                lista.agregar();
                alert('Personaje creado con exito');
                console.log(lista.listar());
                break;
            
            //Ver lista de personajes
            case "b":
                lista.listar();
                break;
            
            //Modificar un personaje
            case "c":
                lista.modificar(prompt('Ingrese el nombre del personaje que deseas modificar: '));
                break;

            //Borrar un personaje
            case "d":
                lista.borrar(prompt("Ingrese el nombre del personaje que quieras borrar: "));
                //Se vuelve a llamar a la lista para actualizar la lista
                lista.listar();
                break;

            case "e":
                break;
            default:
                opcion = alert('Error, no ha ingresado un valor valido. Intente nuevamente');
                break;
        }

        if (opcion != "e") {
            opcion = menu().toLowerCase();
        }
    }
    

}, false);




/*window.onload = function (){
    let name = prompt('Ingrese el nombre de su personaje: ');
    if(name){
        document.getElementById('nombre').innerHTML = name;
    }
}
*/