const express = require('express');
const router = express.Router();
const util = require('util');
const { spawn }  = require('child_process');

const dockerStat = spawn('docker', ['stats']);

router.get('/', (req, res) => {
    res.send('hello from container route');
})

router.get('/constream', async (req, res, next) => {
    //code that will grab the info from the docker cli
    try {
        dockerStat.stdout.on('data', data => {
            console.log(`${data}`);
        })

        dockerStat.stderr.on('data', data => {
            console.log(`stderr: ${data}`);
        });
        //return res.send('dockData');

    }
    catch(err) {
        next(err);
    }
    //await exec function reading the CLI following the input of `docker stats`
    //store this in a variable ?
        //send variable with data to front end
        //this function needs to call itself since it is part of the stream event 
    
})

module.exports = router;
