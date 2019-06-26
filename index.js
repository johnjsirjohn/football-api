const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Express API listening on port ${port}`));

app.get('/', (request, response) => {
  response.send(`I'll do something, I promise!${port}`);
});
