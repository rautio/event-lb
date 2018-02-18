import winston from 'winston';
import fs from 'fs';

let dir = './logs';

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

winston.emitErrs = true;

let logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: dir + 'all-logs.logs',
            handleException: true,
            json: true,
            maxSize: 524880, //5mb
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleException: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: function(msg, encoding){
        logger.info(msg);
    }
};

export default logger;
