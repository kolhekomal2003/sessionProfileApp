let express=require("express");
let path=require("path");
let pubPath=path.join(__dirname,"public");
let app=express();

app.use(express.static(pubPath));

app.get("/reg",(req,res)=>{
    res.sendFile(pubPath+"/register.html");

      });
 app.listen(4000,function(req,res){
    console.log("Server started");
 });
