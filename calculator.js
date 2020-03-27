//jshint esversion:6

const express = require("express");
//Body-parser for getting html elements
const bodyParser = require("body-parser");

const app = express();
//Explicitly used to get the html form inputs
app.use(bodyParser.urlencoded({extended: true}));

//Used for the get-method
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//Used for the post-method
app.post("/",function(req,res){

  //Number used for explicit type conversion
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result is "+result);
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / Math.pow(height,2);

  res.send("Your BMI is "+bmi.toFixed(2));
});

//Tunes the server to port:3000
app.listen(3000, function(){
  console.log("Server port atarted at 3000");
});
