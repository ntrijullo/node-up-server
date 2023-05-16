// const onRequest = (request, response) =>{
//     console.log('Se ha detectado una nueva conexion');
//     console.log(request);
//     console.log(request.headers.host);
//     console.log(request.url);
// }

// const http = require('http');
// const server = http.createServer(onRequest);
// server.listen(3000);
// console.log('mi servidor esta corriendo en localhost:3000');

//*******************************
// const onRequest = (request, response) =>{
//     response.setHeader('Content-type','text/plain');
//     response.write('Bienvenidos al curso de Node Js');
//     response.end();
// }

// const http = require('http');
// const server = http.createServer(onRequest);
// server.listen(3000);

// //*******************************
// //resumir conexion
// const onRequest = (req, res) =>{
//     res.setHeader('Content-type','text/plain');
//     res.write('Bienvenidos al curso de Node Js');
//     res.end();
// }

// const http = require('http');
// const server = http.createServer(onRequest);
// const port = 3000;
// server.listen(port, ()=>{
//     console.log('Mi servidor esta corriendo en localhost:'+port);
// });


//*******************************
//redireccion a html
const onRequest = (req, res) =>
{
    if(req.url == '/'){
        fs.readFile('index.html', (err, content) => {
            if(err){
                if(err.code== 'ENOENT'){
                    res.setStatus = 404;
                    console.log('No se ha encontrado el archivo');
                }else{
                    res.setStatus = 500;
                    console.log('Ha ocirrido un error en el servidor');
                }
            }else{
                res.setStatus = 202;
                res.setHeader('Content-type','text/html');
                res.write(content);
                res.end();
            }
        });
    }else if(req.url == '/users'){
        if(req.method == 'GET'){
            res.setStatus = 200;
            res.setHeader('Content-type','text/html');
            res.write('Accediendo a usuarios');
            res.end();
        }else if(req.method == 'POST'){

            var datos ='';
            req.on('data', (d)=>{
                datos +=d;
            })

            req.on('end',()=>{
                var post = qs.parse(datos);
                res.end('Datos recibidos '+post.nombre);
            })
            
        }else if(req.method == 'PUT'){
            var datos ='';
            req.on('data', (d)=>{
                datos +=d;
            })

            req.on('end',()=>{
                var post = qs.parse(datos);
                res.end('Datos recibidos '+post.nombre);
            })
        }else if(req.method == 'DELETE'){
            var datos ='';
            req.on('data', (d)=>{
                datos +=d;
            })

            req.on('end',()=>{
                var post = qs.parse(datos);
                res.end('Datos recibidos '+post.nombre);
            })
        }
    }
}

const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const server = http.createServer(onRequest);
const port = 3000;

server.listen(port, ()=>{
    console.log('Mi servidor esta corriendo en localhost:'+port);
});