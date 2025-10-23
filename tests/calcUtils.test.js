const { calculate } = require('../src/utils/calcUtils');

test('suma correctamente', () => expect(calculate(2,3,'+')).toBe(5));
test('resta correctamente', () => expect(calculate(7,4,'-')).toBe(3));
test('error operador inválido', () => expect(()=>calculate(2,2,'x')).toThrow('Invalid operator'));
test('error division por cero', () => expect(()=>calculate(5,0,'/')).toThrow('Division by zero'));
tests/app.test.js
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

