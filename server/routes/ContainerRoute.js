const express = require('express');
const router = express.Router();
const util = require('util');
const { spawn }  = require('child_process');

const dockerStat = spawn('docker', ['stats', '--format="{{json .}}"']);

// const emitSSE = (res, id, data) =>{
//     res.write("data: " + data + '\n\n');
//     res.flush()
//   }
  
//   const handleSSE = (req, res) =>{
//     res.writeHead(200, {
//       'Content-Type': 'text/event-stream',
//       'Cache-Control': 'no-cache',
//       'Connection': 'keep-alive'
//     });
//     const id = (new Date()).toLocaleTimeString();
//     // Sends a SSE every 3 seconds on a single connection.
//     setInterval(function() {
//       emitSSE(res, id, (new Date()).toLocaleTimeString());
//     }, 3000);
  
//     emitSSE(res, id, (new Date()).toLocaleTimeString());
//   }
  

router.get('/', (req, res) => {
    res.send('hello from container route');
})


//constream, handledockerStatRequest
    //set the rules for the request
    //call the dockerstatstdOut
        //emit appropriate data in the appropriate formate

const dockerStatRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
      dockerStat.stdout.on('data', data => {
        // const output = [];
        // const dockerStats = data.trim;
        // const objs = dockerStats.split('\n');
        // for (let i = 0; i < objs.length; i++) {
        //   output.push(JSON.parse(objs[i]));
        // }
        // return output;
        // console.log(`${data}`);
        // res.write('data: ' + data + '\n\n');
      });
      dockerStat.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    });
}

router.get('/constream', dockerStatRequest);


// router.get('/constream', async (req, res, next) => {
//     //code that will grab the info from the docker cli
//     try {
//         dockerStat.stdout.on('data', data => {
//             console.log(`${data}`);
//             res.write(`${data}`);
//             res.end()
//         })

//         dockerStat.stderr.on('data', data => {
//             console.log(`stderr: ${data}`);
//         });
        

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
