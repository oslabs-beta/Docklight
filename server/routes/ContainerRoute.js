const express = require('express');
const router = express.Router();
const util = require('util');
const { spawn }  = require('child_process');
const exec = util.promisify(require('child_process').exec);

//const dockerStat = spawn('docker', ['stats', '--format="{{json .}}"']);

router.get('/', (req, res) => {
  res.send('hello from container route');
});



const dockerStatRequest = async (req, res, next) => {
  const writeStats = (data) => {
    data = JSON.stringify(data);
    res.write('data: ' + data + '\n\n');
  };
  const parseData = (stdout) => {
    const containers = [];
    const dockerStats = stdout.trim();
  
    const conts = dockerStats.split('\n');
  
    for (let i = 0; i < conts.length; i++) {
      containers.push(JSON.parse(conts[i]));
    }
    return containers;
  }
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  try {
    const { stdout } = await exec('docker stats --no-stream --format "{{json .}}"');
    console.log(stdout);
    const newData = parseData(stdout);
    setInterval(() => writeStats(newData), 1000);
  }
  catch(err) {
    next(err);
  }
      
};

router.get('/constream', dockerStatRequest);


// router.get('/constream', async (req, res, next) => {
//     //code that will grab the info from the docker cli
//     try {
//         dockerStat.stdout.on('data', data => {
//             console.log(`${data}`);
//             res.write(`data: ${data} \n\n`);
//         })

//         dockerStat.stderr.on('data', data => {
//             console.log(`stderr: ${data}`);


//     }
//     catch(err) {
//         next(err);
//     }
//     //await exec function reading the CLI following the input of `docker stats`
//     //store this in a variable ?
//         //send variable with data to front end
//         //this function needs to call itself since it is part of the stream event 
    
// });

module.exports = router;
