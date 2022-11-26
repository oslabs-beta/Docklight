import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import path from 'path';
import containerRoute from './routes/ContainerRoute';
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.status(200);
  next();
});

//middleware to parse incoming requests

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//send the main HTML to the client
app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../Client/index.html'));
});

//send any requests from /cont endpoint through this route
app.use('/cont', containerRoute);

//send all static files through the build route
app.use('/build', express.static(path.join(__dirname, '../build')));

//404 error handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Not found');
});

//global error handler
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('Global Error Handler:', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

export default app;