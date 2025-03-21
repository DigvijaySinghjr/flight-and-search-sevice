const dotenv =require('dotenv');
                                                          //instead of these two lines we can direct use "require('dotenv').config()"
dotenv.config();

module.exports ={
    PORT:process.env.PORT
}