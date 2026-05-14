const express = require('express')
const mongoose = require('mongoose')
const Producto = require('./Producto')
const app = express()

app.use(express.json())

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/miTienda')
  .then(() => console.log('Conectado a MongoDB ✅'))
  .catch((error) => console.log('Error:', error))

// GET — traer todos los productos
app.get('/productos', async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
})

// POST — crear un producto nuevo
app.post('/productos', async (req, res) => {
  const producto = new Producto(req.body)
  await producto.save()
  res.json({ mensaje: 'Producto creado', producto })
})

// PUT — actualizar un producto por ID
app.put('/productos/:id', async (req, res)=> {
   const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
   )
   res.json({ mensaje: 'Producto actualizado', producto })
})

// DELETE — eliminar un producto por ID
app.delete('/productos/:id', async (req, res)=> {
   await Producto.findByIdAndDelete(req.params.id)
   res.json({mensaje: "Producto eliminado"})
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})