// funciones flechas

const dividir=(a,b)=>a/b

const restar = (a,b)=>{
    return a-b
}

function sumar(a,b){
    //this.nombre='sebas'
    return a+b
}

console.log(sumar(2,3))
console.log(restar(10,3))
console.log(dividir(10,2))

// destructuracion de objetos y arreglos

const persona1 ={
    nombre: 'jonathan',
    edad:32
}
const {nombre}=persona1
console.log(nombre)
console.log(persona1.nombre)

const perrito = {
    nombre: 'Firulais',
    estaVivo: true
}
function hacerAlgo({nombre}){
    console.log(nombre+'-F')
}

    hacerAlgo(persona1)
    hacerAlgo(perrito)

    const getAlumnos=()=>['edgar-D','jefry-D','camilo-D']
    //const alumnos=['edgar','jefry','camilo']

    const[ _ , segundoAlumno, tercerAlumno]= getAlumnos()

    console.log (segundoAlumno)
    console.log (tercerAlumno)

// Las clases son plantillas para objetos
class Persona{
    constructor(nombre,cedula) {
            this.nombre = nombre
            this.cedula = cedula
        }  
    saludar(){
        console.log('Hola, soy '+this.nombre)
    }
    despidir(){
        console.log('Adios, nos vemos pronto  '+this.nombre,' cliente numero ',this.cedula)
    }
}
// Aquí crear objetos, una instancia de la clase
const persona2 = new Persona('Sandra',191926)
const persona3 = new Persona('Jefry', 518930)
persona2.saludar()
persona3.saludar()
persona3.despidir()


const identificador = Symbol('devf')
const perro = {
    [identificador]: 'Firulais'
}
console.log(perro.nombre)
console.log(perro[identificador])
console.log(identificador)
console.log(Symbol('devf') === identificador)
