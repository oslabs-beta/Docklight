import app from './app';

//declare PORT here
const PORT = 3000;

//start server if not running in test mode
app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
