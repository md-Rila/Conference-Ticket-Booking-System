var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
var connection = mysql.createConnection({
	host     :'localhost',
	user     :'root',
	database :'confi_book'
});
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors());
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  app.get('/',(req,res)=>{
      connection.query('select * from confi_books',function(error,results){
          if(error){
              console.log(error)
          }
          else{
              console.log(results)
              res.send(results)
          }
      })
  })
  app.post('/login',(req,res)=>{
    connection.query('insert into user (name,mail,password) values(?,?,?)',function(error,results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
            res.send(results)
        }
    })
})
  app.listen(8080);