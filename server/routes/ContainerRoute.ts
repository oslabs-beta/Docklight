import Router, { Request, Response} from 'express';
import { containerStreamController } from '../controllers/ContainerStreamController';
import { containerMountController } from '../controllers/ContainerMountController';
const router = Router();

//route to get containers by ID
router.get('/constream/', containerStreamController.dockerStatRequestById);

//route for averaged data 
router.get('/fullstream', containerStreamController.dockerStatRequest);

//route that allows container to be turned off
router.post('/off', containerMountController.stopContainer, (req: Request, res: Response) => {
  return res.status(200).send('off success')
});

//route to turn containers on
router.post('/on', containerMountController.startContainer, (req: Request, res: Response) => {
  return res.status(200).send('on success')
});

//route to return list of containers 
router.get('/list', containerStreamController.dockerContainers, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.containers);
});

export default router;
