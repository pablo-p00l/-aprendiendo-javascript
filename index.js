// let edad = 12;

// if (edad >= 18)
// {
//     console.log("Eres mayor de edad");
// }else if (edad >= 13) 
// {
//     console.log("Eres un adolescente");
// }else
// {
//     console.log("Eres un niño");
// };

// for (let i=0 ;i <= 5; i++)
// {
//     console.log(`Numero: ${i}`);
// };

// let contador = 0;
// while (contador < 3)
// {
//     console.log (`Contador: ${contador}`)
//     contador++;
// }

// let frutas = ["Manzana", "Banana", "Uva"]

// for (let fruta of frutas)
// {
//     console.log(fruta);
// };

// //funcion clasica
// function multiplicar(a, b){
//     return a*b;

// }
// //funcion arrow equivalente

// const multiplicar1 = (a, b) => a * b

// console.log(multiplicar(5, 10));
// console.log(multiplicar1(5, 5));
    


// const area = (base,altura) => base *altura;


// console.log(area(4 , 5));
// EXPLICACION DE ARRAY Y TIPOS DE DATOS EN JAVASCRIPT
// let numero = [1,2,3,4,5,6,7,8,9];
// let mixto = [1, "HOLA", true, null];

// console.log(numero[0]);
// console.log(mixto[2]);
// console.log(numero.length);

// numero.push(10);
// console.log(numero);

// numero.pop();
// console.log(numero);
 // ARRAY FILTROS  , MAP ,ACUMULADOR

// let numero = [1,2,3,4,5,6,7,8,9,10];
//  let pares = numero.filter(numero => numero % 2 === 0);
// let impares = numero.filter(numero => numero % 2 !== 0);
//  console.log(numero);
//  console.log(pares);
//  console.log(impares);

//  //map tranforma elemento 

//  let precio= [100,200,300];
//  let precioIva = precio.map(precio => precio * 1.21);
//  console.log(precio);
//  console.log(precioIva);

// let numeros =[1,2,3,4,5,6,7,8,9,10];
//  let suma = numeros.reduce((acumulador, numero) => acumulador + numero,0);
//  console.log(suma);

let productos = [
  { nombre: "Laptop",    precio: 1500, categoria: "tecnologia" },
  { nombre: "Mouse",     precio: 40,   categoria: "tecnologia" },
  { nombre: "Teclado",   precio: 45,   categoria: "tecnologia" },
  { nombre: "Escritorio",precio: 200,  categoria: "muebles"    },
  { nombre: "Silla Gamer",precio: 350, categoria: "muebles"    }
]
//Resolvé estos tres ejercicios en orden:
// 1️⃣ Usá filter para obtener solo los productos de categoría "tecnologia"
// 2️⃣ Usá map para obtener un array con solo los nombres de todos los productos
// 3️⃣ Usá reduce para calcular el precio total de todos los productos sumados

// let tecnologia = productos.filter(productos => productos.categoria === "tecnologia")
// console.log(tecnologia);

// let name = productos.map(producto => producto.nombre )

// console.log(name);


// let total = productos.reduce((acumulador, productos) =>acumulador + productos.precio , 0)
// console.log(total)

let alumnos = [
  { nombre: "Pablo",  edad: 25, nota: 8,  aprobado: true  },
  { nombre: "Maria",  edad: 22, nota: 4,  aprobado: false },
  { nombre: "Carlos", edad: 28, nota: 9,  aprobado: true  },
  { nombre: "Ana",    edad: 20, nota: 3,  aprobado: false },
  { nombre: "Luis",   edad: 24, nota: 7,  aprobado: true  }
]

// 1️⃣ filter
// Obtené solo los alumnos que aprobaron. LISTO
// 2️⃣ filter
// Obtené los alumnos menores de 25 años. LISTO
// 3️⃣ map
// Obtené un array con solo los nombres de todos los alumnos.LISTO
// 4️⃣ map
// Obtené un array con las notas de todos los alumnos.LISTO
// 5️⃣ reduce
// Calculá el promedio de notas de todos los alumnos.

// 💡 Pista: primero sumá todas las notas con reduce, después dividí por alumnos.length

// 6️⃣ Desafío final
// Obtené los nombres de los alumnos que aprobaron. Combiná filter + map en cadena.

// 💡 Pista: alumnos.filter(...).map(...)

// let Positivo = alumnos.filter(alumnos => alumnos.aprobado === true)
// console.log(Positivo)

// let menores = alumnos.filter(alumnos => alumnos.edad <= 25)
// console.log(menores)

// let Todos = alumnos.map(alumnos => alumnos.nombre)
// console.log(Todos)

// let NotasDeTodos = alumnos.map(alumnos => alumnos.nota)
// console.log(NotasDeTodos)

// let suma = alumnos.reduce((sumatorio, alumnos) => sumatorio + alumnos.nota , 0 )
//  let promedio = suma / alumnos.length
// console.log(promedio)

// let NombresAprobados = alumnos.filter(alumnos => alumnos.aprobado === true).map(alumnos => alumnos.nombre)
// console.log(NombresAprobados)

// AMENEJO DE OBJETOS

//  let persona ={

//  nombre : "Pablo",
//  edad : 25,
//  ciudad: "LaRioja",
//  saludar: function(){
//   return `Hola, Soy ${this.nombre}`
//  }
//  }
//  console.log(persona.saludar())

// // accedemos a sus propiedades

// console.log(persona.nombre)
// console.log(persona.edad)
// persona.edad= 26;
// console.log(persona.edad);

// console.log(persona)
// persona.email = "pablo@mgial.com"
// console.log(persona)

// let persona= {nombre:"pablo", edad: 25, ciudad:"LaRioja"}
//  console.log("Datos Persona 1")
// for(let clave in persona)
// {
 
//   console.log(`${clave}: ${persona[clave]}`)
// }

// let persona = {nombre: "pablo", edad: 25, ciudad:"larioja"}

// // sin desestructuracion
// function saludar(persona)
// {
//   return `Hola ${persona.nombre}, tenes ${persona.edad}, años`
// }
// console.log(saludar(persona))

// // CON DESESTRUCTURACION - MAS LIMPIO

// function saludar({nombre, edad})
// {
//   return ` Hola ${nombre}, tenes ${edad} años`
// }
// console.log(saludar(persona), "capo ")

// let frutas = ["manzana", "pera", "uva"]
// // copia un array

// let copia = [...frutas]
// console.log(...copia)

// // combinar dos array

// let verduras= ["zanahoria","lechuga"]
// let alimento = [...frutas, ...verduras]
// console.log(alimento)

// let persona = {nombre:"pablo", edad: 25, altura: 1.78, color: "negro"}

// let copia = {...persona}

// let personaCompleta = {...persona, ciudad:"LaRioja",email:"pablo@gmail.com"}
// console.log(personaCompleta)

//FUNCIONES

// let numero= [5,3,8,1,9]
// console.log(Math.max(...numero))
// console.log(Math.min(...numero))


