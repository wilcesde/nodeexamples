/**
 * Server
 * forma uno
 * conte html
 */

/*var http = require('http');

function onServer(request, response) {
    console.log("Peticion OK");
    
    response.writeHead( 200, { "Content-Type": "text/html"} );

    response.write( "<h1> Server online, hello! </h1>" );

    response.end();
}

var server = http.createServer(onServer);

server.listen(3000);

console.log( "working in http://localhost:3000/" );
*/

/**
 * Server
 * forma dos
 * contenido texto plano
 */
/*var http = require('http');

http.createServer( (request, response) => {
    
    response.writeHead( 200, { 'Content-Type': 'text/plain' } );

    response.write( "Otro saludo" );

    response.end();
}).listen( 3000, 'localhost');

console.log( 'Server running in http://localhost:3000/' );
*/

/**
 * Server
 * forma tres
 * ruta: abrir un documento html
 */
/*var http = require( "http" );

fs = require( "fs" );

http.createServer( (req, res) => {

    fs.readFile( `./homer.html`, (err, html) => {

        res.write( html );

        res.end();

    } );

}).listen( 3000 );

console.log( 'Server http://localhost:3000/' );
*/


/**
 * Server
 * forma cuatro
 * const and call back
 */
/*const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola como van?\n');

} );

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/


/**
 * Server
 * forma cinco
 * abrir diferentes rutas (manual)
 */
/*let http = require( "http" );
let fs = require( "fs" );

http.createServer( (req, res) => {

    res.writeHead( 200, { 'Content-Type': 'text/html' } );

    switch (req.url) {
        case '/':
            plantilla = "home.html";
            break;
        case '/express':
            plantilla = "sobre_express.html";
            break;
        default:
            plantilla = "404.html";
            break;
    }

    fs.readFile( `./plantillas/` + `${plantilla}` , (err, datos) => {

        res.write(datos);

        res.end();

    } );

}).listen( 3000, 'localhost' );

console.log("Server ok");
*/

/**
 * Server express
 * forma seis
 * npm install express
 * usar rutas con express
 */
/*const express = require('express')

const app = express()   //inicializar express

let fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

app.use( (req, res) => {

    //res.send('Hello word with express')

    res.writeHead( 200, { 'Content-Type': 'text/html' } )

    switch (req.url) {
        case '/':
            plantilla = "home.html"
            break;
        case '/express':
            plantilla = "sobre_express.html"
            break;
        default:
            plantilla = "404.html"
            break;
    }

    fs.readFile( `./plantillas/` + `${plantilla}` , (err, datos) => {

        res.write(datos)
        res.end()

    } )

})

const server = app.listen( port, () => {
    console.log(`Server running at http://${hostname}:${server.address().port}/`)
})
*/


/**
 * server express
 * forma siete
 * gestionar rutas de los verbos
 * GET, POST, PUT, PATCH, DELETE con Router
 */

 let express = require('express')
 let bodyParser = require('body-parser')
 const mongoose = require('mongoose')

 /**
 * product
 * import the shema
 */
const Product = require('./models/product')

 //let router = express.Router()  //para gestionar las peticiones (Send Request)

 //const HOSTNAME = '127.0.0.1'
 //const PORT = 3000

 let app = express()  //inicialiaar express
 const port = process.env.PORT || 3000

/**
 * middlewares
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use(router)   //usar el router desde express

//gestionar las peticiones (req)
//get listar todos los registros
/*router.get('/users' , (req, res) => {
    //res.send('User list')

    res.send(
        {"user": [
            {
                "first_name": "Maria",
                "last_name": "Jaramillo",
                "phone": "55555555"
            },
            {
                "first_name": "Jose",
                "last_name": "Lopera",
                "phone": "8888888"
            },
            {
                "first_name": "Ana",
                "last_name": "Gomez",
                "phone": "444444444"
            }
            ]
        }
    )
})


//get listar uno solo registro
router.get('/user_id' , (req, res) => {
    
    res.send(
        {"user": [
            {
                "first_name": "Jose",
                "last_name": "Lopera",
                "phone": "8888888"
            }
            ]
        }
    )
})


//post add un registro
router.post('/add_user' , (req, res) => {
    
    res.send(
        {"user": [
            {
                "first_name": "Juan",
                "last_name": "Marroquin",
                "phone": "7777777"
            }
            ]
        }
    )
})


//put actualizar un registro
router.put('/update_user/user_id' , (req, res) => {
    
    res.send(
        {"user": [
            {
                "first_name": "Jose Maria",
                "last_name": "Lopera Gonzalez",
                "phone": "8888888"
            }
            ]
        }
    )
})


//patch actualizar parte del registro
router.patch('/update_user/user_id' , (req, res) => {
    
    res.send(
        {"user": [
            {
                "first_name": "Maria",
                "last_name": "Lopera Gonzalez",
                "phone": "8888888-999"
            }
            ]
        }
    )
})


//delete eliminar un registro
router.delete('/delete_user/user_id' , (req, res) => {
    
    res.send(
        {"user": [
            {
                "first_name": "Ana",
                "last_name": "Gomez",
                "phone": "444444444"
            },
            {"Message": "User deleted!!"}
            ]
        }
    )    
})

*/

//post
app.post('/api/product', (req, res) => {
    //console.log(req.body)  //para ver el cuerpo de la peticion

    //res.status(200).send({message: 'product received'})
    //res.status(404).send({message: 'product does not exist'})

    /**use shema and register product in the data base*/
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()    
    product.name = req.body.name    
    product.price = req.body.price
    product.category = req.body.category
    product.image = req.body.image

    product.save( (err, productStored) => {
        if (err) res.status(500).send({message: `save error: ${err}`})

        res.status(200).send({product: productStored})
    } )
})


//get users
app.get('/api/product', (req, res) => {
    //res.send(200, {products: []})

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })

        if (!products) return res.status(404).send({
            message: 'There are no product'
        })

        res.status(200).send({ products })

    })

})

/*let server = app.listen( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
}) */

mongoose.connect('mongodb://localhost:27017/shopwcg', (err, res) => {
    /*if (err) {
        return console.log(`Connection to the failed database: ${err}`)
    }  */

    if (err) throw err    
    console.log('Database connection ok')

    const server = app.listen( port, () => {

        console.log( `Listening http://localhost:${ server.address().port }` )
    
    } )
})