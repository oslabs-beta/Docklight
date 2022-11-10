const express = require('express');
const app = express();
const path = require('path');
const containerRoute = require('./routes/ContainerRoute')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/cont', containerRoute);

app.use('*', (req, res) => {
  res.status(404).send('Not found')
});

app.use((err, req, res, next) => {
  res.send('Global error handler');
});

app.listen(3000, () => {
  console.log('server listening at 3000');
});
