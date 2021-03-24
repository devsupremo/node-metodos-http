const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar info do back-end
 * Post: criar info no back-end
 * PUT/PATCH: alterar info no back-end
 * DELETE: deletar info no back-end
 * 
 * 
 */

app.get('/projects', (request, response) => {
   return response.json([
     'Projeto 1',
     'Projeto 2',
   ]);
});


app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('Back-end started! 🚀')
});