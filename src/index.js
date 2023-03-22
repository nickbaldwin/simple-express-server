import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started http://localhost:3000');
  app.use(api());
});

// Export the Express API
module.exports = app;