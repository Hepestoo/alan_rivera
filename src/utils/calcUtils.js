function calculate(a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Inputs must be numbers');
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': if (b===0) throw new Error('Division by zero'); return a / b;
    default: throw new Error('Invalid operator');
  }
}
module.exports = { calculate };
