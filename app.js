const express=require("express");
const ejs=require("ejs");

const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/gujarat",function(req,res){
    res.render("gujarat",{heading:"Gujarat"});
});
app.get("/maharashtra",function(req,res){
    res.render("maharashtra",{heading:"Maharashtra"});
});
app.get("/kerala",function(req,res){
    res.render("kerala",{heading:"Kerala"});
});
app.get("/tamilnadu",function(req,res){
    res.render("tamilnadu",{heading:"Tamilnadu"});
});
app.get("/",function(req,res)
{
    res.render("indianMap");
});

app.listen(4000,function(){
    console.log("Successfull");
});