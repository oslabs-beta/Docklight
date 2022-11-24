import { RequestHandler, Response } from "express";
const express = require('express');
const { RouterProvider } = require('react-router-dom');
const router = express.Router();
const containerController = require('../controllers/ContainerController');

router.get('/', (req: Request, res: Response) => {
  res.send('hello from container route');
});

router.get('/constream/', containerController.dockerStatRequestById);

router.get('/fullstream', containerController.dockerStatRequest);

router.get('/list', containerController.dockerContainers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.containers);
});

module.exports = router;
