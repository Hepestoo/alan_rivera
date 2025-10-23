const request = require('supertest');
const app = require('../app');

test('GET /health responde ok', async ()=>{
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('POST /calc suma', async ()=>{
  const res = await request(app).post('/calc').send({a:4,b:5,op:'+'});
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(9);
});

test('POST /calc operador inválido', async ()=>{
  const res = await request(app).post('/calc').send({a:4,b:5,op:'^'});
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe('Invalid operator');
});

