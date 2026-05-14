
const express= require ('express');
const app = express();
// middlaware para leer jSON
app.use(express.json());

//Ruta pricipal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
})
 app.get('/productos', (req, res)=>{
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
    ];
    res.json(productos);
 });

 //ruta con parametro
 app.get('/productos/:id', (req, res) =>{

    const id = req.params.id;
    res.json ({mensaje: `Producto con id ${id}`});
 })

 app.listen(3000, () => {
    console.log("servidor corriendo en http://localhots:3000");
 })