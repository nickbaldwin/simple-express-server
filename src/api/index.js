import { Router } from 'express';

export default () => {
  const api = Router();

  api.get('/', (req, res) => {  
  	res.json({api: true});
  });

  api.get('/api/:number', (req, res) => {
    res.json({number: req.params.number});
  });

  return api;
}