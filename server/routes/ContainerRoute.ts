import Router, { Request, Response} from 'express';
import { containerController } from '../controllers/ContainerController';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello from container route');
});

router.get('/constream/', containerController.dockerStatRequestById);

router.get('/fullstream', containerController.dockerStatRequest);

router.get('/list', containerController.dockerContainers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.containers);
});

export default router;
