import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import { exec } from "child_process";
const execProm = promisify(exec);


export const containerMountController = {

  //function to stop container
    //we grab the ID from the request body to asynchronously use the docker CLI to stop that particular container
    stopContainer: async (req: Request, res: Response, next: NextFunction) => {
        const { ID } = req.body
        try { 
          const { stdout } = await execProm(`docker stop ${ID}`);
          return next();
        }
        catch(err) {
          return next({
            log: `error ${err} occurred in stopContainer`,
            message: {err: 'an error occured'}
          });
        }
      },
  //similarly so for startContainer
    //same logic as above, only utilizing docker start to start the container
    startContainer: async (req: Request, res: Response, next: NextFunction) => {
    const { ID } = req.body
    try { 
        const { stdout } = await execProm(`docker start ${ID}`);
        console.log(stdout)
        return next();
    }
    catch(err) {
        return next({
        log: `error ${err} occurred in dockerContainers`,
        message: {err: 'an error occured'}
        });
    }
    }

}