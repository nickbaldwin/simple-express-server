import { Router } from 'express';

export default () => {
  const api = Router();

  api.get('/', (req, res) => {  
  	res.json({api: true});
  });

  api.get('/api/:number', (req, res) => {
    res.json({number: req.params.number});
  });

  api.get('/secrets', (req, res) => {
    res.json([
          {
            "id": 1,
            "name": "secret one",
            "value": "1111"
          },
          {
            "id": 2,
              "name": "secret two",
              "value": "2222"
          },
          {
            "id": 3,
              "name": "secret three",
              "value": "3333"
          }
          ]);
  });

  return api;
}