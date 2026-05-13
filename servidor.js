const http = require('http')
// importa el módulo http para crear un servidor web

const servidor = http.createServer((req, res) => {
  // req = request (lo que pide el navegador)
  // res = response (lo que responde el servidor)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // 200 = código de estado HTTP que indica que la solicitud fue exitosa
  res.end('Hola mundo desde Node.js!')
  //lo que ve el navegador cuando accede a http://localhost:3000
})

servidor.listen(3000, () => {
  // el servidor escucha en el puerto 3000 y ejecuta la función de callback cuando está listo
  console.log('Servidor corriendo en http://localhost:3000')
  console.log('Presiona Ctrl+C para detener el servidor')
  console.log('¡Hola mundo desde Node.js!')
})