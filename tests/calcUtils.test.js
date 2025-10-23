const { calculate } = require('../src/utils/calcUtils');

test('suma correctamente', () => expect(calculate(2,3,'+')).toBe(5));
test('resta correctamente', () => expect(calculate(7,4,'-')).toBe(3));
test('error operador inválido', () => expect(()=>calculate(2,2,'x')).toThrow('Invalid operator'));
test('error division por cero', () => expect(()=>calculate(5,0,'/')).toThrow('Division by zero'));

