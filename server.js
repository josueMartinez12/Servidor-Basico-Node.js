const http = require('http');   // Módulo para crear el servidor
const fs = require('fs');       // Módulo para leer archivos
const path = require('path');   // Módulo para manejar rutas de carpetas

const server = http.createServer((req, res) => {

    // Definimos la ruta del archivo index.html
    const filePath = path.join(__dirname, 'index.html');

    // Leemos el archivo
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Si hay un error (por ejemplo, no existe el archivo)
            res.writeHead(500);
            res.end('Error interno del servidor');
        } else {
            // Si todo está bien, enviamos el HTML
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

// El servidor escuchará en el puerto 3000
server.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

