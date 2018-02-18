import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import logger from './utils/logger';

import router from './routes';

/*eslint-disable no-console*/

const port = 3001;
const server = express();

//Logging
logger.debug("Overriding 'Express' Logger");
server.use(morgan("combined",{"stream":logger.stream}));


server.use((req,res,next)=>{
    // res.header('Access-Control-Allow-Origin','*');
});

//Basic middleware
server.use(bodyParser.urlencoded({extended:false})); //Parse urlencoded bodies
server.use(bodyParser.json()); //Send JSON responses


//Routes
server.use('api/v1',router);

server.listen(port, function(err){
    if(err){
        console.log(err);
    }
});
