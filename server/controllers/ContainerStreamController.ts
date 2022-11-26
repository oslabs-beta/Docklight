import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import { exec } from "child_process";
const execProm = promisify(exec);

//parsing data given to us by the docker CLI 
const parseData = (stdout: string) => {
  const containers = [];
  const dockerStats = stdout.trim();
      
  const conts = dockerStats.split('\n');
      
  for (let i = 0; i < conts.length; i++) {
    containers.push(JSON.parse(conts[i]));
  }
  return containers;
};
export const containerStreamController = {

  //middleware function that returns an actively updating array of all currently running containers through an event source interval
  dockerStatRequest: (req: Request, res: Response, next: NextFunction) => {
    //opens CLI command, grabs the return value, parses it and sends it back through the stream
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    const interval = setInterval(async () => {
      const { stdout } = await execProm('docker stats --no-stream --format "{{json .}}"');
      console.log('hi from request', stdout);
      const data: string[] = parseData(stdout);
      const newData: string = JSON.stringify(data);
      res.locals.dockerStat = newData;
      res.write('data: ' + newData + '\n\n');
    }, 1500);

    res.on('close', () => {
      console.log('client dropped me :((');
      //Any other clean up
      clearInterval(interval);
      res.end();
    });        
  },

  //function that returns a single container by ID as an object in an actively updating array through an event source interval
  dockerStatRequestById: (req: Request, res: Response, next: NextFunction) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    //grabs ID from url query
    const { id } = req.query;
    const interval = setInterval(async () => {
      const { stdout } = await execProm(`docker stats --no-stream --format "{{json .}}" ${id}`);
      console.log('hi from request by ID', stdout);
      const data: string[] = parseData(stdout);
      const newData: string = JSON.stringify(data);
      res.locals.dockerStatById = newData;
      res.write('data: ' + newData + '\n\n');
    }, 1500);

    res.on('close', () => {
      console.log('client dropped me :((');
      //Any other clean up
      clearInterval(interval);
      res.end();
    });   
  },
  
  //function that grabs list of all docker containers, active or inactive
  dockerContainers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { stdout } = await execProm('docker ps --all --format "{{json .}}"');
      const newData = parseData(stdout).map(container => {
        return ({
          ID: container.ID,
          Names: container.Names,
          State: container.State
        });
      });
      console.log(newData);
      res.locals.containers = newData;
      return next();
    }
    catch(err) {
      return next({
        log: `error ${err} occurred in dockerContainers`,
        message: {err: 'an error occured'}
      });
    }
  }
};




//const { spawn }  = require('child_process');
// Code for streaming w/ spawn vs an interval call
//const dockerStat = spawn('docker', ['stats', '--format="{{json .}}"']);

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