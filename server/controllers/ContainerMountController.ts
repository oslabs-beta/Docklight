import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import { exec } from "child_process";
const execProm = promisify(exec);

export const containerMountController = {

    stopContainer: async (req: Request, res: Response, next: NextFunction) => {
        const { ID } = req.body
        try { 
          const { stdout } = await execProm(`docker stop ${ID}`);
          console.log(stdout)
          return next();
        }
        catch(err) {
          return next({
            log: `error ${err} occurred in dockerContainers`,
            message: {err: 'an error occured'}
          });
        }
      },

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