 const express = require("express");
 const bodyParser=require("body-parser");

 const {PORT} =require('./config/serverConfig');                           //importing  

 const setupAndStartServer = async () => {

    //create  the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));                      //middleware

    app.listen(PORT, () =>{
        //console.log(process.env);
        console.log(`Server started at ${PORT}`)
    })
 }

 setupAndStartServer();
