var http=require('http'),
fs = require('fs');

http.createServer(function(solicitud,respuesta){
    //console.log('Conexion entrante');
    console.log('Mi url es: ' + solicitud.url);

    if(solicitud.url == '/nosotros.html') {
        fs.readFile('./nosotros.html', function(lab, html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if(solicitud.url == '/nuestros_servicios.html'){
        fs.readFile('./nuestros_servicios.html', function(lab, html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if(solicitud.url == '/catalogo_clientes.html'){
        fs.readFile('./catalogo_clientes.html', function(lab, html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if(solicitud.url == '/contactenos.html'){
        fs.readFile('./contactenos.html', function(lab, html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if(solicitud.url == '/'){
        fs.readFile('acme.html', function(lab, html){
            respuesta.write(html);
            respuesta.end();
        });
    }

}).listen(8080);