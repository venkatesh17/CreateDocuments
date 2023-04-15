const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
const MultipartyMiddleware = multiparty({uploadDir:'./Images'})
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const port = 8000

app.get('/', (req, res)=>{
  res.status(200).json({
    message: "Testing our server"
  })
})

app.post('/uploads', MultipartyMiddleware, (req,res)=>{
  console.log("--", req.files.upload)
})

app.listen(port, console.log("Successfully connected"))

/*
 global.appPath = __dirname
global.BasicResponse = require('./Utilities/ResponseBody')
require('./Global')
const express = require('express')
const eventEmiter = require("events");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./Routes')
const app = express();
const bunyan = require('bunyan');
const bunyanformat = require("bunyan-format")

const formatOut = bunyanformat({ outputMode: 'short' });
global.log = bunyan.createLogger({
    name: 'myapi',
    stream: formatOut,
    level: "debug"
})

require('body-parser-xml')(bodyParser);

global.serverUp = new eventEmiter()


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(bodyParser.xml());

app.use(bodyParser.xml({
    limit: '10MB',   // Reject payload bigger than 1 MB
    xmlParseOptions: {
      normalize: true,     // Trim whitespace inside text nodes
      normalizeTags: true, // Transform tags to lowercase
      explicitArray: false // Only put nodes in array if >1
    }
  }));


app.use('/v1', routes)

httpServer = require('http').createServer(app)

const port = 5000
httpServer.listen(port, ()=>{
    // connectEmitter.on("connectedDB", ()=>{
    //     console.log(`Server listening port on ${port}`)
    //     setTimeout(()=>{
    //         serverUp.emit("listening")
    //     }, 1000)
        
    // }),
    connectedMongoEmitter.on('connectedMongoDB', () => {
      setTimeout(()=>{
        serverUp.emit("listening")
    }, 1000)
    })
    
})

module.exports = httpServer

*/




