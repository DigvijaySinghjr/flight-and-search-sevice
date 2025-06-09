 const express = require("express");
 const bodyParser=require("body-parser");
 
 const {PORT} =require('./config/serverConfig');                           //importing  
 const ApiRoutes = require('./routes/index');
 
 const setupAndStartServer = async () => {
  

    //create  the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));                      //middleware

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () =>{
        //console.log(process.env);
        console.log(`Server started at ${PORT}`)
        
    });
 }

 setupAndStartServer();
