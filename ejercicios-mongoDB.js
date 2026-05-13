// ── BASE DE DATOS: gimnasio ──────────────────────────────

// Insertar socios
db.socios.insertMany([
  { nombre: "Pablo", edad: 25, plan: "mensual", activo: true, pagos: 3, peso: 80 },
  // ...
])

// Buscar socios activos
db.socios.find({ activo: true })

// Top 3 por peso
db.socios.find().sort({ peso: -1 }).limit(3)

// Agregar email a todos
db.socios.updateMany({}, { $set: { email: "" } })

// Eliminar inactivos
db.socios.deleteMany({ activo: false })

// Agregación por plan
db.socios.aggregate([
  { $group: { _id: "$plan", totalSocios: { $sum: 1 } } }
])

// Crear índice
db.socios.createIndex({ plan: 1 })

