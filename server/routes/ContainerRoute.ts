import Router, { Request, Response} from 'express';
import { containerStreamController } from '../controllers/ContainerStreamController';
import { containerMountController } from '../controllers/ContainerMountController';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello from container route');
});

router.get('/constream/', containerStreamController.dockerStatRequestById);

router.get('/fullstream', containerStreamController.dockerStatRequest);

router.post('/off', containerMountController.stopContainer, (req: Request, res: Response) => {
  res.status(200).send('off success')
});

router.post('/on', containerMountController.startContainer, (req: Request, res: Response) => {
  res.status(200).send('on success')
});

router.get('/list', containerStreamController.dockerContainers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.containers);
});

export default router;
