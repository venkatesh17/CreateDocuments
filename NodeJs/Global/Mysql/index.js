const eventEmitter = require("events");
const Sequelize = require("sequelize")

global.connectEmitter = new eventEmitter();
global.Op = Sequelize.Op;
global.mysqlSequelize = new Sequelize(
    // "Employee Database", "root", "YP@venky17",
    "venkatesh","mysql-15943-0.cloudclusters.net", "YP@venky17",
    {
    host:'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 2000
    },
    operatorAliases: false
})



let seq = [mysqlSequelize]

for (let con of seq){
    con.authenticate().then(()=>{
        console.log(`Connection has been established successfully for ${con.config.username}`);        
        global.connectEmitter.emit("connectedDB")
    }).catch(err =>{
        console.error("Unable to connect to the database: ", err);
        
    })
}

























// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "YP@venky17",
//     database: "sys"
// })

// connection.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("connected");
//     } 
    
// })

// connection.query("SELECT * FROM sys.chatBot_Tktnumber",(err, rows, fields)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("rows", rows);
//     }

// })