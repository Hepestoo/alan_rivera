const express = require('express');
const calcRouter = require('./src/routes/calc');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/calc', calcRouter);

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
}

module.exports = app;
