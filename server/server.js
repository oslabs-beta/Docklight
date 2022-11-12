const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const containerRoute = require('./routes/ContainerRoute');

const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.status(200);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../Client/index.html'));
});



app.use('/cont', containerRoute);



app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('*', (req, res) => {
  res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('Global Error Handler:', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);;
});

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
