const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

// Usar las rutas definidas en el archivo './routes'
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
