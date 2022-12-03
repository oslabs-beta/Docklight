import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import { exec } from "child_process";
const execProm = promisify(exec);

//parsing data given to us by the docker CLI in order to have JSON that is consumable by the client
const parseData = (stdout: string) => {
  const containers = [];
  const dockerStats: string = stdout.trim();    
  const conts: string[] = dockerStats.split('\n');

  for (let i = 0; i < conts.length; i++) {
    containers.push(JSON.parse(conts[i]));
  }
  //returns array of proper objects to then be stringified 
  return containers;
};

export const containerStreamController = {
  //middleware function that returns an actively updating array of all currently running containers through an event source interval

  dockerStatRequest: async (req: Request, res: Response, next: NextFunction) => {
    //each request is within try block to catch any potential errors
      //using "setHeader" here instead of "writeHead" to prevent Headers Sent error
    try {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
    //interval is set here with async function that is called in order to keep data fresh as it is sent to front-end
      const interval = setInterval(async () => {
        try {
          //opens CLI command, grabs the return value, parses it and sends it back through the stream
          const { stdout } = await execProm('docker stats --no-stream --format "{{json .}}"');
          //if data returns properly, then we can set the status of the request and begin the process of writing the stream data
          res.status(200);
          const data: string[] = parseData(stdout);
          const newData: string = JSON.stringify(data);
          res.write('data: ' + newData + '\n\n');
        } catch(err) {
          return next({
            log: `error ${err} occurred in dockerStatRequest interval`,
            message: {err: 'an error occured'}
          });
        }
      }, 1500);
    //closing the connection on the server-end
      res.on('close', () => {
        console.log('Client dropped');
        clearInterval(interval);
        res.end();
      });
    } catch(err) {
      return next({
        log: `error ${err} occurred in dockerStatRequest`,
        message: {err: 'an error occured'}
      });
    }        
  },

  //function that returns a single container by ID as an object in an actively updating array through an event source interval
    //here, this function is written slightly differently, since it will never fire if the containers are never returned by the axios request on the frontend 
  dockerStatRequestById: (req: Request, res: Response, next: NextFunction) => {
    //set the headers and status immediately
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    //grabs ID from url query and passes that in to the SSE interval 
    const { id } = req.query;
    //set interval and grab data from CLI for stream
    const interval = setInterval(async () => {
      const { stdout } = await execProm(`docker stats --no-stream --format "{{json .}}" ${id}`);
      const data: string[] = parseData(stdout);
      const newData: string = JSON.stringify(data);
      res.write('data: ' + newData + '\n\n');
    }, 1500);

    res.on('close', () => {
      clearInterval(interval);
      res.end();
    });   
  },
  
  //function that grabs list of all docker containers, active or inactive
    //sends back a new array of objects that only have properties that have relevance to front-end
    //this function sends an error to frontend that prompts the user to turn on docker desktop if it is not running
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