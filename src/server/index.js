const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// const mysql = require('mysql');
//
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "changeme",
//   database: "jordon"
//
// });
//
//

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "be73d5ca2304c0",
  password: "75b19aa1",
  database: "jordonLive"
});



// app.get("/",(req,res) => {
//     con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO newsletter (firstName, lastName, email, number) VALUES ('Eric', 'Ji', 'eric.ji3333@gmail.com', 7138857540);";
//       con.query(sql,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });
//     });
//
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO newsletter (firstName, lastName, email, number) VALUES ('Eric', 'Ji', 'eric.ji3333@gmail.com', 7138857540);";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });



app.post("/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const number = req.body.number;

  con.connect(function(err) {

    console.log("Connected!");
    var sql = "INSERT INTO newsletter (firstName, lastName, email, number) VALUES (?, ?, ?, ?);";
    con.query(sql, [firstName, lastName, email, number] ,function (err, result) {
      if (err) throw err;
      console.log(err);
    });
  });
});

app.listen(process.env.PORT || PORT, () =>{
  console.log('please');
});
